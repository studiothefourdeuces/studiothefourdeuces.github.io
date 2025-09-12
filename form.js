const {
  useState,
  useRef,
  useEffect
} = React;
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
    agreeTerms: false,
    confirmInfo: false
  });

  // (keep your validation, handleChange, optionBtn etc.)
  // For brevity I'm reusing your original helpers and constants:
  const stepTitles = {
    1: "Tell Us About You",
    2: "What's Your Idea",
    3: "Where Do You Want It",
    4: "Contact Details"
  };
  const bodyPartOptions = {
    Arm: [{
      label: "Full Arm Sleeve",
      sessions: "5 sessions"
    }, {
      label: "Forearm Outside",
      sessions: "1 session"
    }, {
      label: "Forearm Inside",
      sessions: "1 session"
    }, {
      label: "Inner Upper Arm",
      sessions: "1 session"
    }, {
      label: "Outer Upper Arm",
      sessions: "1 session"
    }, {
      label: "Hand",
      sessions: "½ session"
    }],
    Back: [{
      label: "Full Back",
      sessions: "5-7 sessions"
    }, {
      label: "Upper or Lower Side",
      sessions: "3 sessions"
    }, {
      label: "Right or Left Side",
      sessions: "3 sessions"
    }],
    Chest: [{
      label: "Full Chest",
      sessions: "2-3 sessions"
    }, {
      label: "Right or Left Side",
      sessions: "1 session"
    }, {
      label: "Upper Side",
      sessions: "1 session"
    }, {
      label: "Lower Side",
      sessions: "1 session"
    }],
    Neck: [{
      label: "Full Neck",
      sessions: "2 sessions"
    }, {
      label: "Right or Left Side",
      sessions: "1 session"
    }],
    Torso: [{
      label: "Full Front Torso",
      sessions: "6 sessions"
    }, {
      label: "Right or Left Side",
      sessions: "2 sessions"
    }],
    Leg: [{
      label: "Full Leg",
      sessions: "7-8 sessions"
    }, {
      label: "Full Lower Leg",
      sessions: "3 sessions"
    }, {
      label: "Shin (Front)",
      sessions: "½ session"
    }, {
      label: "Calf (Back)",
      sessions: "½ session"
    }, {
      label: "Right/Left Side of Lower Leg",
      sessions: "½ session"
    }, {
      label: "Knee",
      sessions: "1 session"
    }, {
      label: "Full Thigh",
      sessions: "4 sessions"
    }, {
      label: "Front/Back Side of Thigh",
      sessions: "2 sessions"
    }, {
      label: "Right/Left Side of Thigh",
      sessions: "2 sessions"
    }, {
      label: "Feet",
      sessions: "1 session"
    }]
  };
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked,
      files
    } = e.target;
    if (type === "checkbox") {
      setFormData(p => ({
        ...p,
        [name]: checked
      }));
    } else if (type === "file") {
      setFormData(p => ({
        ...p,
        [name]: files
      }));
    } else {
      setFormData(p => ({
        ...p,
        [name]: value
      }));
    }
  };
  const [errors, setErrors] = useState({});
  const validateStep = s => {
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
      if (formData.skinCondition === "Yes" && !formData.skinConditionDetails.trim()) newErrors.skinConditionDetails = "Please specify your skin condition";
      if (!formData.pregnant) newErrors.pregnant = "Please select Yes or No";
      if (formData.agreeTerms !== "Yes") newErrors.agreeTerms = "You must agree to terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const progress = step / 4 * 100;
  const inputBase = "p-4 w-full rounded-lg bg-gray-100 border border-transparent focus:outline-none placeholder:text-black/30 font-sans font-thin text-base md:text-lg leading-relaxed";
  const stepTitleBase = "text-6xl sm:text-8xl md:text-8xl font-extrabold mb-6";
  const labelBase = "mb-[5px] block font-thin leading-[140%]";
  const ctaBtn = "rounded-lg px-5 py-3 border border-orange-200 text-orange-500 bg-transparent font-thin uppercase transition hover:border-orange-500";
  const optionBtn = (isSelected = false, fullWidth = false) => `rounded-lg bg-gray-100 px-5 py-3 ${fullWidth ? "w-full" : ""} font-thin uppercase transition ${isSelected ? "bg-gray-100 border border-black text-black" : "bg-gray-100 border border-transparent text-black"}`;

  /* ------------------- TRANSITION MEASUREMENT SETUP ------------------- */
  const panelRefs = useRef({});
  const wrapperRef = useRef(null);
  const [wrapperHeight, setWrapperHeight] = useState("auto");

  // Set wrapper height to the height of the active panel so we get smooth height transitions
  useEffect(() => {
    function measure() {
      const el = panelRefs.current[step];
      if (el) {
        const h = el.getBoundingClientRect().height;
        setWrapperHeight(`${Math.ceil(h)}px`);
      } else {
        setWrapperHeight("auto");
      }
    }
    // small timeout helps if images are still loading
    const t = setTimeout(measure, 20);
    window.addEventListener("resize", measure);

    // try ResizeObserver for panels (if available) to recalc height when content changes
    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(measure);
      Object.values(panelRefs.current).forEach(el => el && ro.observe(el));
    }
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
      if (ro) ro.disconnect();
    };
  }, [step, formData.references.length, formData.idea, formData.email]); // run when relevant content could change

  /* ------------------- RENDER HELPERS FOR EACH STEP ------------------- */
  const StepOne = () => /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${stepTitleBase} text-left`
  }, stepTitles[1]), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "What's your full name?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("input", {
    className: inputBase,
    name: "fullName",
    value: formData.fullName,
    onChange: handleChange,
    placeholder: "JOHN DOE"
  }), errors.fullName && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.fullName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Where are you located?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("input", {
    className: inputBase,
    name: "location",
    value: formData.location,
    onChange: handleChange,
    placeholder: "AMSTERDAM, NETHERLANDS"
  }), errors.location && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.location)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "What's your gender?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row gap-4"
  }, ["Male", "Female", "Other"].map(opt => {
    const sel = formData.gender === opt;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      onClick: () => setFormData(p => ({
        ...p,
        gender: opt
      })),
      className: `${optionBtn(sel)} flex-1`
    }, opt);
  })), errors.gender && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.gender)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Are you over 18?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, ["Yes", "No"].map(opt => {
    const sel = formData.is18 === opt;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      onClick: () => setFormData(p => ({
        ...p,
        is18: opt
      })),
      className: optionBtn(sel)
    }, opt);
  })), errors.is18 && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.is18))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (validateStep(1)) setStep(2);
    },
    className: `${ctaBtn} no-bg`
  }, "Next")));
  const StepTwo = () => /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${stepTitleBase} text-left`
  }, stepTitles[2]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Describe your tattoo idea", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("textarea", {
    className: inputBase,
    rows: 4,
    name: "idea",
    value: formData.idea,
    onChange: handleChange,
    placeholder: "YOUR IDEA HERE"
  }), errors.idea && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.idea)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Approximate Size in CM?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("input", {
    className: inputBase,
    name: "size",
    value: formData.size,
    onChange: handleChange,
    placeholder: "E.G. 10X15"
  }), errors.size && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.size)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "What is the style?"), /*#__PURE__*/React.createElement("input", {
    className: inputBase,
    name: "style",
    value: formData.style,
    onChange: handleChange,
    placeholder: "E.G. TRADITIONAL, MINIMALIST"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Upload reference images", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "upload-btn"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    name: "references",
    multiple: true,
    className: "hidden",
    onChange: e => {
      const selectedFiles = Array.from(e.target.files);
      const combinedFiles = [...formData.references, ...selectedFiles].slice(0, 4);
      setFormData(p => ({
        ...p,
        references: combinedFiles
      }));
    },
    disabled: formData.references.length >= 4
  }), /*#__PURE__*/React.createElement("img", {
    src: "image.svg",
    alt: "Upload",
    className: "w-12 h-12"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-black/20"
  }, "Upload reference images of your tattoo idea. Accepted formats: PNG, JPG, JPEG. Maximum size: 5 MB per file."), errors.references && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.references)), formData.references.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Uploaded reference images"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
  }, formData.references.map((file, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "relative group border border-gray-200 rounded-lg overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: URL.createObjectURL(file),
    alt: `preview-${index}`,
    className: "w-full h-32 object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1 left-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full"
  }, index + 1), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      const newFiles = formData.references.filter((_, i) => i !== index);
      setFormData(p => ({
        ...p,
        references: newFiles
      }));
    },
    className: "absolute top-1 right-1 !bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition"
  }, "\u2715")))))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStep(1),
    className: optionBtn(false)
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (validateStep(2)) setStep(3);
    },
    className: `${ctaBtn} no-bg`
  }, "Next")));
  const StepThree = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${stepTitleBase} text-left`
  }, stepTitles[3]), /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Primary Body Part", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, Object.keys(bodyPartOptions).map(part => {
    const selected = formData.bodyPart === part;
    return /*#__PURE__*/React.createElement("button", {
      key: part,
      type: "button",
      onClick: () => setFormData(p => ({
        ...p,
        bodyPart: part,
        secondaryPart: ""
      })),
      className: optionBtn(selected, true)
    }, part.toUpperCase());
  })), errors.bodyPart && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.bodyPart)), formData.bodyPart && /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Specific Area", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, bodyPartOptions[formData.bodyPart].map(opt => {
    const selected = formData.secondaryPart === opt.label;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.label,
      type: "button",
      onClick: () => setFormData(p => ({
        ...p,
        secondaryPart: opt.label
      })),
      className: optionBtn(selected, true)
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between w-full"
    }, /*#__PURE__*/React.createElement("span", null, opt.label.toUpperCase()), /*#__PURE__*/React.createElement("small", {
      className: "text-xs text-black/50"
    }, opt.sessions)));
  })), errors.secondaryPart && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.secondaryPart)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mt-6"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStep(2),
    className: optionBtn(false)
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (validateStep(3)) setStep(4);
    },
    className: `${ctaBtn} no-bg`
  }, "Next")));
  const StepFour = () => /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${stepTitleBase} text-left`
  }, stepTitles[4]), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "What's your email?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("input", {
    className: inputBase,
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange,
    placeholder: "EMAIL@EXAMPLE.COM"
  }), errors.email && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "What's your Instagram?"), /*#__PURE__*/React.createElement("input", {
    className: inputBase,
    name: "instagram",
    value: formData.instagram,
    onChange: handleChange,
    placeholder: "@USERNAME"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Do you have any skin conditions?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, ["Yes", "No"].map(opt => {
    const sel = formData.skinCondition === opt;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      onClick: () => setFormData(p => ({
        ...p,
        skinCondition: opt
      })),
      className: optionBtn(sel)
    }, opt);
  })), formData.skinCondition === "Yes" && /*#__PURE__*/React.createElement("input", {
    className: inputBase + " mt-3",
    placeholder: "SPECIFY CONDITIONS",
    value: formData.skinConditionDetails,
    onChange: e => setFormData(p => ({
      ...p,
      skinConditionDetails: e.target.value
    }))
  }), errors.skinCondition && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.skinCondition), formData.skinCondition === "Yes" && errors.skinConditionDetails && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.skinConditionDetails))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Are you pregnant/breastfeeding?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, ["Yes", "No"].map(opt => {
    const sel = formData.pregnant === opt;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      onClick: () => setFormData(p => ({
        ...p,
        pregnant: opt
      })),
      className: optionBtn(sel)
    }, opt);
  })), errors.pregnant && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.pregnant)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: labelBase
  }, "Do you agree to our terms?", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, ["Yes", "No"].map(opt => {
    const sel = formData.agreeTerms === opt;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      onClick: () => setFormData(p => ({
        ...p,
        agreeTerms: opt
      })),
      className: optionBtn(sel)
    }, opt);
  })), errors.agreeTerms && /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, errors.agreeTerms))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mt-6"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStep(3),
    className: optionBtn(false)
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (validateStep(4)) {
        console.log("Form submitted!", formData);
        alert("Form submitted successfully!");
      }
    },
    className: `${ctaBtn} no-bg`
  }, "Schedule")));

  /* Map of step renderers for convenience */
  const renderers = {
    1: StepOne,
    2: StepTwo,
    3: StepThree,
    4: StepFour
  };

  /* ------------------- MAIN RENDER ------------------- */
  return /*#__PURE__*/React.createElement("div", {
    className: "tattoo-form flex flex-col min-h-screen font-sans"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, "Book Experience"), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gray-200 h-0.5"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${progress}%`
    },
    className: "h-0.5 bg-orange-500 transition-all duration-300"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row flex-1 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 flex flex-col justify-start items-start p-4 sm:p-6 md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-black font-thin text-sm sm:text-base mb-2"
  }, "Step ", step, " / 4")), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 p-8 sm:p-6 md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-panels",
    ref: wrapperRef,
    style: {
      height: wrapperHeight
    },
    "aria-live": "polite"
  }, [1, 2, 3, 4].map(i => {
    const Panel = renderers[i];
    const posClass = i === step ? "active" : i < step ? "left" : "right";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      ref: el => panelRefs.current[i] = el,
      className: `step-panel ${posClass}`,
      "aria-hidden": i === step ? "false" : "true"
    }, /*#__PURE__*/React.createElement(Panel, null));
  }))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(TattooBookingForm, null));
