const { useState, useRef, useEffect } = React;

function BookingForm() {
    const [step, setStep] = useState(1);
    const [visible, setVisible] = useState(false);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: "",
        location: "",
        email: "",
        instagram: "",
        idea: "",
        size: "",
        style: "",
        references: [],
        bodyPart: "",
        secondaryPart: "",
        skinCondition: "",
        skinConditionDetails: "",
        is18: "",
        pregnant: "",
        gender: "",
        agreeTerms: "",
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);


    const bodyPartOptions = {
        Arm: [
            { label: "Full Arm Sleeve", sessions: "5 sessions" },
            { label: "Forearm Outside", sessions: "1 session" },
            { label: "Forearm Inside", sessions: "1 session" },
            { label: "Inner Upper Arm", sessions: "1 session" },
            { label: "Outer Upper Arm", sessions: "1 session" },
            { label: "Hand", sessions: "½ session" },
        ],
        Back: [
            { label: "Full Back", sessions: "5-7 sessions" },
            { label: "Upper or Lower Side", sessions: "3 sessions" },
            { label: "Right or Left Side", sessions: "3 sessions" },
        ],
        Chest: [
            { label: "Full Chest", sessions: "2-3 sessions" },
            { label: "Right or Left Side", sessions: "1 session" },
            { label: "Upper Side", sessions: "1 session" },
            { label: "Lower Side", sessions: "1 session" },
        ],
        Neck: [
            { label: "Full Neck", sessions: "2 sessions" },
            { label: "Right or Left Side", sessions: "1 session" },
        ],
        Torso: [
            { label: "Full Front Torso", sessions: "6 sessions" },
            { label: "Right or Left Side", sessions: "2 sessions" },
        ],
        Leg: [
            { label: "Full Leg", sessions: "7-8 sessions" },
            { label: "Full Lower Leg", sessions: "3 sessions" },
            { label: "Shin (Front)", sessions: "½ session" },
            { label: "Calf (Back)", sessions: "½ session" },
            { label: "Right/Left Side of Lower Leg", sessions: "½ session" },
            { label: "Knee", sessions: "1 session" },
            { label: "Full Thigh", sessions: "4 sessions" },
            { label: "Front/Back Side of Thigh", sessions: "2 sessions" },
            { label: "Feet", sessions: "1 session" },
        ],
    };

    // Scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (formRef.current) observer.observe(formRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else if (type === "file") {
            handleCloudinaryFiles(Array.from(files));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const validateStep = (s) => {
        const newErrors = {};
        if (s === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = "Please fill your Full name";
            if (!formData.location.trim()) newErrors.location = "Please fill your location";
            if (!formData.gender) newErrors.gender = "Please select your gender";
            if (!formData.is18 || formData.is18 === "No") newErrors.is18 = "You must be at least 18";
        }
        if (s === 2) {
            if (!formData.idea.trim() || formData.idea.trim().length < 60)
                newErrors.idea = "Describe your idea (min 60 characters)";
            if (!formData.size.trim()) newErrors.size = "Please specify size";
            if (!formData.references.length) newErrors.references = "Upload at least one image";
        }
        if (s === 3) {
            if (!formData.bodyPart) newErrors.bodyPart = "Please select body part";
            if (!formData.secondaryPart) newErrors.secondaryPart = "Please select specific body part";
        }
        if (s === 4) {
            if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
                newErrors.email = "Enter a valid email";
            if (!formData.skinCondition) newErrors.skinCondition = "Please select yes or no";
            if (formData.skinCondition === "Yes" && !formData.skinConditionDetails.trim())
                newErrors.skinConditionDetails = "Specify skin condition";
            if (!formData.pregnant) newErrors.pregnant = "Select Yes or No";
            if (formData.agreeTerms !== "Yes") newErrors.agreeTerms = "You must agree to terms";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const inputBase = "p-4 w-full rounded-lg border border-transparent focus:outline-none placeholder:text-black/30 font-sans font-thin text-base md:text-lg";
    const labelBase = "mb-[5px] block font-thin leading-[140%]";
    const backBtn = "px-5 py-3 rounded-xs border border-[#3c3c3c] bg-transparent text-base md:text-[0.9rem] font-thin uppercase transition hover:border-[#ffffff] hover:text-[#ffffff]";
    const ctaBtn = "rounded-lg px-5 py-3 border border-orange-500 text-orange-500 bg-transparent font-thin uppercase transition hover:bg-orange-500 hover:text-black";
    const optionBtn = (isSelected = false, fullWidth = false) =>
        `rounded-lg px-5 py-3 ${fullWidth ? "w-full" : ""} font-thin uppercase transition ${isSelected ? "bg-transparent border border-white" : "bg-transparent border border-[#3c3c3c]"} flex justify-center`;

    const uploadToCloudinary = async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "tatto_uploads");

        const res = await fetch("https://api.cloudinary.com/v1_1/dqb33pkgr/image/upload", {
            method: "POST",
            body: data,
        });
        const result = await res.json();
        if (res.ok && result.secure_url) return result.secure_url;
        console.error("Cloudinary upload error:", result);
        throw new Error(result.error?.message || "Cloudinary upload failed");
    };

    const [submittingFiles, setSubmittingFiles] = useState(false);

    const handleCloudinaryFiles = async (files) => {
        setSubmittingFiles(true);

        try {
            // Upload all files in parallel
            const uploadedUrls = await Promise.all(
                files.map(async (file) => {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "tatto_uploads");

                    try {
                        const res = await fetch("https://api.cloudinary.com/v1_1/dqb33pkgr/image/upload", {
                            method: "POST",
                            body: data,
                        });
                        const result = await res.json();

                        if (res.ok && result.secure_url) {
                            return result.secure_url;
                        } else {
                            console.error("Cloudinary upload error for file:", file.name, result);
                            alert(`Failed to upload ${file.name}: ${result.error?.message || "Unknown error"}`);
                            return null;
                        }
                    } catch (err) {
                        console.error("Network error uploading file:", file.name, err);
                        alert(`Network error uploading ${file.name}`);
                        return null;
                    }
                })
            );

            // Filter out failed uploads
            const validUrls = uploadedUrls.filter(Boolean);

            if (validUrls.length > 0) {
                setFormData((prev) => ({
                    ...prev,
                    references: [...(prev.references || []), ...validUrls].slice(0, 4),
                }));
            }
        } finally {
            setSubmittingFiles(false);
        }
    };

    const fieldLabels = {
        fullName: "Name",
        location: "Location",
        email: "Email",
        instagram: "Instagram",
        idea: "Tattoo Idea",
        size: "Size (cm)",
        style: "Style",
        references: "Reference Images",
        bodyPart: "Body Part",
        secondaryPart: "Specific Area",
        skinCondition: "Skin Condition",
        skinConditionDetails: "Skin Condition Details",
        is18: "Over 18?",
        pregnant: "Pregnant / Breastfeeding",
        gender: "Gender",
        agreeTerms: "Agreed to Terms",
    };

    const handleSubmit = async () => {
        if (!validateStep(4)) return;

        setSubmitting(true);
        setError(null);

        const data = new FormData();

        for (const key in formData) {
            let value = formData[key];
            if (key === "references" && value.length > 0) {
                value = value.join(", "); // join URLs
            }

            if (value !== undefined && value !== null && value !== "") {
                const label = fieldLabels[key] || key; // fallback to key if not in map
                data.append(label, value.toString());
            }
        }

        try {
            const response = await fetch("https://formspree.io/f/mwprevay", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const resData = await response.json();
                console.error("Formspree error:", resData);
                setError("Error submitting form. Please try again.");
            }
        } catch (err) {
            console.error("Network error:", err);
            setError("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    // --- STEP COMPONENTS ---
    const StepOne = () => (
        <div className="grid grid-cols-1 gap-6 relative">
            <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6">
                Request A <span className="relative inline-block">Tattoo
                    <span className="absolute -top-2 -right-8 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">1/4</span>
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelBase}>What's your full name?<span className="text-orange-500"> *</span></label>
                    <input className={inputBase} name="fullName" value={formData.fullName} onChange={handleChange} placeholder="JOHN DOE" />
                    {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                </div>
                <div>
                    <label className={labelBase}>Where are you located?<span className="text-orange-500"> *</span></label>
                    <input className={inputBase} name="location" value={formData.location} onChange={handleChange} placeholder="AMSTERDAM, NETHERLANDS" />
                    {errors.location && <p className="error-text">{errors.location}</p>}
                </div>
                <div>
                    <label className={labelBase}>What's your gender?<span className="text-orange-500"> *</span></label>
                    <div className="flex gap-4">
                        {["Male", "Female", "Other"].map(opt => {
                            const sel = formData.gender === opt;
                            return (
                                <button key={opt} type="button" onClick={() => setFormData(p => ({ ...p, gender: opt }))} className={optionBtn(sel)}>{opt}</button>
                            );
                        })}
                    </div>
                    {errors.gender && <p className="error-text">{errors.gender}</p>}
                </div>
                <div>
                    <label className={labelBase}>Are you over 18?<span className="text-orange-500"> *</span></label>
                    <div className="flex gap-4">
                        {["Yes", "No"].map(opt => {
                            const sel = formData.is18 === opt;
                            return (
                                <button key={opt} type="button" onClick={() => setFormData(p => ({ ...p, is18: opt }))} className={optionBtn(sel)}>{opt}</button>
                            );
                        })}
                    </div>
                    {errors.is18 && <p className="error-text">{errors.is18}</p>}
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button type="button" onClick={() => { if (validateStep(1)) setStep(2); }} className={ctaBtn}>Next</button>
            </div>
        </div>
    );

    const StepTwo = () => (
        <div className="grid grid-cols-1 gap-6">
            <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6">
                What's Your <span className="relative inline-block">Idea
                    <span className="absolute -top-2 -right-8 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">2/4</span>
                </span>
            </div>
            <div>
                <label className={labelBase}>Describe your tattoo idea<span className="text-orange-500"> *</span></label>
                <textarea className={inputBase} rows={4} name="idea" value={formData.idea} onChange={handleChange} placeholder="E.G. A REALISTIC STYLE LION TATTOO THAT CAPTURES EVERY DETAIL"></textarea>
                {errors.idea && <p className="error-text">{errors.idea}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelBase}>Approximate Size in CM?<span className="text-orange-500"> *</span></label>
                    <input className={inputBase} name="size" value={formData.size} onChange={handleChange} placeholder="E.G. 10X15" />
                    {errors.size && <p className="error-text">{errors.size}</p>}
                </div>
                <div>
                    <label className={labelBase}>What is the style?</label>
                    <input className={inputBase} name="style" value={formData.style} onChange={handleChange} placeholder="E.G. FINELINE, CHICANO" />
                </div>
            </div>
            <div>
                <label className={labelBase}>Upload reference images<span className="text-orange-500"> *</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="upload-btn">
                        <input type="file" multiple className="hidden" onChange={(e) => handleCloudinaryFiles(Array.from(e.target.files))} disabled={formData.references.length >= 4} />
                        <img src="/src/assets/images/image.svg" alt="Upload" className="w-12 h-12 invert sepia saturate-200 hue-rotate-180" />
                    </label>
                    <div className="text-xs text-[#868686]">Upload reference images of your tattoo idea. Accepted formats: PNG, JPG, JPEG. Max 5 MB per file.</div>
                    {errors.references && <p className="error-text">{errors.references}</p>}
                </div>
                {formData.references.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {formData.references.map((file, index) => (
                            <div key={index} className="relative group border border-[#3c3c3c] rounded-lg overflow-hidden">
                                <img src={file} alt={`preview-${index}`} className="w-full h-32 object-cover" />
                                <button type="button" onClick={() => setFormData(p => ({ ...p, references: p.references.filter((_, i) => i !== index) }))} className="absolute top-1 right-1 !bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition">✕</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-4">
                <button type="button" onClick={() => setStep(1)} className={optionBtn(false)}>Back</button>
                <button type="button" onClick={() => { if (validateStep(2)) setStep(3); }} className={ctaBtn}>Next</button>
            </div>
        </div>
    );

    const StepThree = () => (
        <div>
            <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6">
                Perfect <span className="relative inline-block">Spot
                    <span className="absolute -top-2 -right-8 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">3/4</span>
                </span>
            </div>
            <label className={labelBase}>Primary Body Part<span className="text-orange-500"> *</span></label>
            <div className="grid grid-cols-2 gap-2">
                {Object.keys(bodyPartOptions).map(part => {
                    const selected = formData.bodyPart === part;
                    return (
                        <button key={part} type="button" onClick={() => setFormData(p => ({ ...p, bodyPart: part, secondaryPart: "" }))} className={optionBtn(selected, true)}>{part.toUpperCase()}</button>
                    );
                })}
            </div>
            {errors.bodyPart && <p className="error-text">{errors.bodyPart}</p>}
            {formData.bodyPart && (
                <div className="mt-5">
                    <label className={labelBase}>Specific Area<span className="text-orange-500"> *</span></label>
                    <div className="flex flex-col gap-2">
                        {bodyPartOptions[formData.bodyPart].map(opt => {
                            const selected = formData.secondaryPart === opt.label;
                            return (
                                <button key={opt.label} type="button" onClick={() => setFormData(p => ({ ...p, secondaryPart: opt.label }))} className={optionBtn(selected, true)}>
                                    <div className="flex justify-between w-full"><span>{opt.label.toUpperCase()}</span><small className="text-xs text-[#868686]">{opt.sessions}</small></div>
                                </button>
                            );
                        })}
                    </div>
                    {errors.secondaryPart && <p className="error-text">{errors.secondaryPart}</p>}
                </div>
            )}
            <div className="flex justify-between mt-6">
                <button type="button" onClick={() => setStep(2)} className={optionBtn(false)}>Back</button>
                <button type="button" onClick={() => { if (validateStep(3)) setStep(4); }} className={ctaBtn}>Next</button>
            </div>
        </div>
    );

    const StepFour = () => (
        <div className="grid grid-cols-1 gap-6">
            <div className="text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6">
                Contact <span className="relative inline-block">Details
                    <span className="absolute -top-2 -right-8 text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">4/4</span>
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
                <div>
                    <label className={labelBase}>What's your email?<span className="text-orange-500"> *</span></label>
                    <input
                        className={inputBase}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="EMAIL@EXAMPLE.COM"
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div>
                    <label className={labelBase}>What's your Instagram?</label>
                    <input
                        className={inputBase}
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@USERNAME"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className={labelBase}>Do you have any skin conditions?<span className="text-orange-500"> *</span></label>
                    <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => {
                            const sel = formData.skinCondition === opt;
                            return (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setFormData((p) => ({ ...p, skinCondition: opt }))}
                                    className={optionBtn(sel)}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>
                    {formData.skinCondition === "Yes" && (
                        <input
                            className={inputBase + " mt-3"}
                            placeholder="SPECIFY CONDITIONS"
                            value={formData.skinConditionDetails}
                            onChange={(e) => setFormData((p) => ({ ...p, skinConditionDetails: e.target.value }))}
                        />
                    )}
                    {errors.skinCondition && <p className="error-text">{errors.skinCondition}</p>}
                    {formData.skinCondition === "Yes" && errors.skinConditionDetails && (
                        <p className="error-text">{errors.skinConditionDetails}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
                <div>
                    <label className={labelBase}>Are you pregnant/breastfeeding?<span className="text-orange-500"> *</span></label>
                    <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => {
                            const sel = formData.pregnant === opt;
                            return (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setFormData((p) => ({ ...p, pregnant: opt }))}
                                    className={optionBtn(sel)}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>
                    {errors.pregnant && <p className="error-text">{errors.pregnant}</p>}
                </div>

                <div>
                    <label className={labelBase}>Do you agree to our <a
                        href="/terms.html"
                        className="underline text-orange-500 hover:text-orange-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        terms
                    </a>
                        ?<span className="text-orange-500"> *</span></label>
                    <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => {
                            const sel = formData.agreeTerms === opt;
                            return (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setFormData((p) => ({ ...p, agreeTerms: opt }))}
                                    className={optionBtn(sel)}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>
                    {errors.agreeTerms && <p className="error-text">{errors.agreeTerms}</p>}
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <button type="button" onClick={() => setStep(3)} className={optionBtn(false)}>
                    Back
                </button>
                <button type="button" onClick={handleSubmit} className={ctaBtn} disabled={submittingFiles}>
                    {submittingFiles ? "Uploading images…" : "Schedule"}
                </button>
            </div>

            {/* ✅ Feedback messages */}
            {submitting && <p className="text-gray-400 mt-4">Submitting…</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {submitted && (
                <p className="text-green-500 mt-4">
                    Successfully requested tattoo! Our team will contact you shortly.
                </p>
            )}

        </div>
    );

    const renderStep = () => {
        if (submitted) {
            return (
                <div className="text-center p-10">
                    <h2 className="text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6">Thank You!</h2>
                    <p className={labelBase}>
                        Your tattoo request was submitted successfully.<br />
                        Our team will contact you shortly.
                    </p>

                    {/* Back to Main Page Button */}
                    <div className="justify-center mt-6">
                        <a
                            href="index.html"
                            className={`${backBtn} relative pr-8 group overflow-hidden`}
                            onClick={e => setOpen && setOpen(false)}
                        >
                            Back to Main
                            <img
                                src="/src/assets/images/svg/arrow-top.svg"
                                alt="arrow"
                                className="absolute top-1 right-1 w-4 h-4 duration-300 opacity-60 group-hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>
            );
        }

        switch (step) {
            case 1:
                return StepOne();
            case 2:
                return StepTwo();
            case 3:
                return StepThree();
            case 4:
                return StepFour();
            default:
                return StepOne();
        }
    };

    return (
        <div id="book" ref={formRef} className="tattoo-form flex flex-col md:min-h-0">
            <div className="flex justify-center w-full mt-8 py-8 px-6 sm:px-6 md:px-0">
                <div className="w-full md:w-2/3 lg:w-1/2 transition-all duration-700 ease-out transform">
                    <div className="form-panels" aria-live="polite">
                        {renderStep()}
                    </div>
                </div>
            </div>
        </div>
    );
}

window.BookingForm = BookingForm;
