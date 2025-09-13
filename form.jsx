const { useState, useRef, useEffect } = React;

function TattooBookingForm() {
    const [step, setStep] = useState(1);
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
        confirmInfo: "",
    });

    const stepTitles = {
        1: "Request A Tattoo",
        2: "What's Your Idea",
        3: "Where Do You Want It",
        4: "Contact Details",
    };

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
            { label: "Right/Left Side of Thigh", sessions: "2 sessions" },
            { label: "Feet", sessions: "1 session" },
        ],
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            setFormData((p) => ({ ...p, [name]: checked }));
        } else if (type === "file") {
            setFormData((p) => ({ ...p, [name]: Array.from(files) }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const [errors, setErrors] = useState({});
    const validateStep = (s) => {
        const newErrors = {};
        if (s === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = "Please fill your Full name";
            if (!formData.location.trim()) newErrors.location = "Please fill your location";
            if (!formData.gender) newErrors.gender = "Please select your gender";
            if (!formData.is18) {
                newErrors.is18 = "Please confirm that you're over 18";
            } else if (formData.is18 === "No") {
                newErrors.is18 = "Sorry, you must be at least 18";
            }
        }
        if (s === 2) {
            if (!formData.idea.trim()) {
                newErrors.idea = "Please describe your idea";
            } else if (formData.idea.trim().length < 60) {
                newErrors.idea = "Please make your description at least 60 characters long";
            }
            if (!formData.size.trim()) newErrors.size = "Please specify approximate size";
            if (!formData.references.length) newErrors.references = "Please upload at least one image";
        }
        if (s === 3) {
            if (!formData.bodyPart) newErrors.bodyPart = "Please select body part";
            if (!formData.secondaryPart) newErrors.secondaryPart = "Please select specific body part";
        }
        if (s === 4) {
            if (!formData.email.trim()) {
                newErrors.email = "Please enter your email";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Please enter a valid email";
            }
            if (!formData.skinCondition) newErrors.skinCondition = "Please select yes or no";
            if (formData.skinCondition === "Yes" && !formData.skinConditionDetails.trim())
                newErrors.skinConditionDetails = "Please specify your skin condition";
            if (!formData.pregnant) newErrors.pregnant = "Please select Yes or No";
            if (formData.agreeTerms !== "Yes") newErrors.agreeTerms = "You must agree to terms";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const progress = (step / 4) * 100;

    const inputBase =
        "p-4 w-full rounded-lg bg-gray-100 border border-transparent focus:outline-none placeholder:text-black/30 font-sans font-thin text-base md:text-lg leading-relaxed";

    const stepTitleBase = "text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6";
    const labelBase = "mb-[5px] block font-thin leading-[140%]";
    const ctaBtn =
        "rounded-lg px-5 py-3 border border-orange-500 text-orange-500 bg-transparent font-thin uppercase transition hover:bg-orange-500 hover:text-black";
    const optionBtn = (isSelected = false, fullWidth = false) =>
        `rounded-lg bg-gray-100 px-5 py-3 ${fullWidth ? "w-full" : ""} font-thin uppercase transition ${isSelected
            ? "bg-transparent border border-[#868686]"
            : "bg-transparent border border-[#3c3c3c]"
        }`;

    const StepOne = () => (
        <div className="grid grid-cols-1 gap-6">
            <div className={`${stepTitleBase} text-left`}>{stepTitles[1]}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
                <div>
                    <label className={labelBase}>
                        What's your full name?<span className="text-orange-500"> *</span>
                    </label>
                    <input
                        className={inputBase}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="JOHN DOE"
                    />
                    {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                </div>
                <div>
                    <label className={labelBase}>
                        Where are you located?<span className="text-orange-500"> *</span>
                    </label>
                    <input
                        className={inputBase}
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="AMSTERDAM, NETHERLANDS"
                    />
                    {errors.location && <p className="error-text">{errors.location}</p>}
                </div>
                <div>
                    <label className={labelBase}>
                        What's your gender?<span className="text-orange-500"> *</span>
                    </label>
                    <div className="flex flex-row gap-4">
                        {["Male", "Female", "Other"].map((opt) => {
                            const sel = formData.gender === opt;
                            return (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setFormData((p) => ({ ...p, gender: opt }))}
                                    className={`${optionBtn(sel)} flex-1`}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>
                    {errors.gender && <p className="error-text">{errors.gender}</p>}
                </div>
                <div>
                    <label className={labelBase}>
                        Are you over 18?<span className="text-orange-500"> *</span>
                    </label>
                    <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => {
                            const sel = formData.is18 === opt;
                            return (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setFormData((p) => ({ ...p, is18: opt }))}
                                    className={optionBtn(sel)}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>
                    {errors.is18 && <p className="error-text">{errors.is18}</p>}
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    type="button"
                    onClick={() => {
                        if (validateStep(1)) setStep(2);
                    }}
                    className={`${ctaBtn} no-bg`}
                >
                    Next
                </button>
            </div>
        </div>
    );

    const StepTwo = () => (
        <div className="grid grid-cols-1 gap-6">
            <div className={`${stepTitleBase} text-left`}>{stepTitles[2]}</div>
            <div>
                <label className={labelBase}>Describe your tattoo idea<span className="text-orange-500"> *</span></label>
                <textarea
                    className={inputBase}
                    rows={4}
                    name="idea"
                    value={formData.idea}
                    onChange={handleChange}
                    placeholder="E.G. A REALISTIC STYLE LION TATTOO THAT CAPTURES EVERY DETAIL, FROM THE TEXTURE OF THE MANE TO THE DEPTH OF THE EYES"
                />
                {errors.idea && <p className="error-text">{errors.idea}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelBase}>Approximate Size in CM?<span className="text-orange-500"> *</span></label>
                    <input
                        className={inputBase}
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        placeholder="E.G. 10X15"
                    />
                    {errors.size && <p className="error-text">{errors.size}</p>}
                </div>
                <div>
                    <label className={labelBase}>What is the style?</label>
                    <input
                        className={inputBase}
                        name="style"
                        value={formData.style}
                        onChange={handleChange}
                        placeholder="E.G. FINELINE, CHICANO"
                    />
                </div>
            </div>
            <div>
                <label className={labelBase}>Upload reference images<span className="text-orange-500"> *</span></label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="upload-btn">
                        <input
                            type="file"
                            name="references"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                                const selectedFiles = Array.from(e.target.files);
                                const combinedFiles = [...formData.references, ...selectedFiles].slice(0, 4);
                                setFormData((p) => ({ ...p, references: combinedFiles }));
                            }}
                            disabled={formData.references.length >= 4}
                        />
                        <img src="image.svg" alt="Upload" className="w-12 h-12 invert sepia saturate-200 hue-rotate-180" />
                    </label>

                    <div className="text-xs text-[#868686]">
                        Upload reference images of your tattoo idea. Accepted formats: PNG, JPG, JPEG. Maximum size: 5 MB per file.
                    </div>
                    {errors.references && <p className="error-text">{errors.references}</p>}
                </div>

                {formData.references.length > 0 && (
                    <div className="mt-4">
                        <label className={labelBase}>Uploaded reference images</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {formData.references.map((file, index) => (
                                <div
                                    key={index}
                                    className="relative group border border-[#3c3c3c] rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`preview-${index}`}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="absolute top-1 left-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                                        {index + 1}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newFiles = formData.references.filter((_, i) => i !== index);
                                            setFormData((p) => ({ ...p, references: newFiles }));
                                        }}
                                        className="absolute top-1 right-1 !bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between mt-4">
                <button type="button" onClick={() => setStep(1)} className={optionBtn(false)}>
                    Back
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (validateStep(2)) setStep(3);
                    }}
                    className={`${ctaBtn} no-bg`}
                >
                    Next
                </button>
            </div>
        </div>
    );

    const StepThree = () => (
        <div>
            <div className="mb-4">
                <div className={`${stepTitleBase} text-left`}>{stepTitles[3]}</div>
                <label className={labelBase}>Primary Body Part<span className="text-orange-500"> *</span></label>
                <div className="grid grid-cols-2 gap-2">
                    {Object.keys(bodyPartOptions).map((part) => {
                        const selected = formData.bodyPart === part;
                        return (
                            <button
                                key={part}
                                type="button"
                                onClick={() =>
                                    setFormData((p) => ({ ...p, bodyPart: part, secondaryPart: "" }))
                                }
                                className={optionBtn(selected, true)}
                            >
                                {part.toUpperCase()}
                            </button>
                        );
                    })}
                </div>
                {errors.bodyPart && <p className="error-text">{errors.bodyPart}</p>}
            </div>

            {formData.bodyPart && (
                <div className="mt-5">
                    <label className={labelBase}>Specific Area<span className="text-orange-500"> *</span></label>
                    <div className="flex flex-col gap-2">
                        {bodyPartOptions[formData.bodyPart].map((opt) => {
                            const selected = formData.secondaryPart === opt.label;
                            return (
                                <button
                                    key={opt.label}
                                    type="button"
                                    onClick={() => setFormData((p) => ({ ...p, secondaryPart: opt.label }))}
                                    className={optionBtn(selected, true)}
                                >
                                    <div className="flex justify-between w-full">
                                        <span>{opt.label.toUpperCase()}</span>
                                        <small className="text-xs text-[#868686]">{opt.sessions}</small>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    {errors.secondaryPart && <p className="error-text">{errors.secondaryPart}</p>}
                </div>
            )}

            <div className="flex justify-between mt-6">
                <button type="button" onClick={() => setStep(2)} className={optionBtn(false)}>
                    Back
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (validateStep(3)) setStep(4);
                    }}
                    className={`${ctaBtn} no-bg`}
                >
                    Next
                </button>
            </div>
        </div>
    );

    const StepFour = () => (
        <div className="grid grid-cols-1 gap-6">
            <div className={`${stepTitleBase} text-left`}>{stepTitles[4]}</div>
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
                    <label className={labelBase}>Do you agree to our terms?<span className="text-orange-500"> *</span></label>
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
                <button
                    type="button"
                    onClick={() => {
                        if (validateStep(4)) {
                            console.log("Form submitted!", formData);
                            alert("Form submitted successfully!");
                        }
                    }}
                    className={`${ctaBtn} no-bg`}
                >
                    Schedule
                </button>
            </div>
        </div>
    );

    const renderers = {
        1: StepOne,
        2: StepTwo,
        3: StepThree,
        4: StepFour,
    };

    return (
        <div className="tattoo-form flex flex-col min-h-screen font-sans">
            <div className="w-full bg-[#3c3c3c] h-0.5">
                <div
                    style={{ width: `${progress}%` }}
                    className="h-0.5 bg-orange-500 transition-all duration-300"
                />
            </div>

            <div className="flex flex-col md:flex-row flex-1 w-full">
                <div className="w-full md:w-1/2 flex flex-col p-2 sm:p-4 md:p-4">
                    <div className="stepNumber">
                        {step} / 4
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 sm:p-6 md:p-8">
                    <div className="w-full">
                        <div className="form-panels" aria-live="polite">
                            <div className="form-panel active">{renderers[step]()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TattooBookingForm />);
