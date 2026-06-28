// --- DOM Target Selectors ---
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const langToggle = document.getElementById("lang-toggle");
  const htmlRoot = document.documentElement;
  const bodyRoot = document.body;

  // --- State Caching & Initial Load Handling ---
  const cachedTheme = localStorage.getItem("portfolio-theme") || "light";
  const cachedLang = localStorage.getItem("portfolio-lang") || "en";

  // Init Theme
  if (cachedTheme === "dark") {
    bodyRoot.classList.add("dark");
    updateThemeIcon(true);
  } else {
    bodyRoot.classList.remove("dark");
    updateThemeIcon(false);
  }

  // Init Language
  setLanguage(cachedLang);

  // --- Theme Toggle Click Listener ---
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = bodyRoot.classList.toggle("dark");
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
      updateThemeIcon(isDark);
    });
  }

  // --- Language Toggle Click Listener ---
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const currentLang = htmlRoot.getAttribute("lang") || "en";
      const targetLang = currentLang === "en" ? "ar" : "en";
      setLanguage(targetLang);
    });
  }

  // Helper to dynamically switch Font Awesome icons on toggle
  function updateThemeIcon(isDark) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector("i");
    if (icon) {
      if (isDark) {
        icon.className = "fa-solid fa-sun";
      } else {
        icon.className = "fa-solid fa-moon";
      }
    }
  }

  // --- Translation Rendering Engine ---
  function setLanguage(lang) {
    htmlRoot.setAttribute("lang", lang);
    htmlRoot.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("portfolio-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const localizationKey = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][localizationKey]) {
        element.textContent = translations[lang][localizationKey];
      }
    });
  }
});

/* ==========================================================================
   Bilingual Dictionary (Dictionary Object)
   ========================================================================== */
const translations = {
  en: {
    navWorks: "My Works",
    navAbout: "About Me",
    langText: "AR",
    heroTitle: "Hi, I'm Alaa Ahmad",
    heroSubtitle: "Computer Engineering Graduate & Full-Stack Developer",
    sectionWorksTitle: "Featured Projects",
    // Project 1
    p1Title: "Making Connections",
    p1Desc:
      "An interactive profile dynamic dashboard featuring real-time connection requests management. Implemented advanced DOM manipulation to handle profile toggling, record isolation, and instant mathematical counter updates upon user interactions.",
    // Project 2
    p2Title: "Palestine Weather",
    p2Desc:
      "An interactive weather forecast dashboard featuring real-time temperature unit conversion (°C/°F) and client-side cookie consent. Integrated dynamic DOM injection to programmatically append custom forecast cards without disrupting the current page state.",
    // Project 3
    p3Title: "Interactive Calculator",
    p3Desc:
      "A functional web calculator featuring real-time mathematical expression evaluation. Implemented event delegation for grid layout interaction, tokenized expression parsing using JavaScript array manipulation, and customized arithmetic error boundaries including prevention of division by zero.",
    // Project 4
    p4Title: "Global Weather App",
    p4Desc:
      "A dynamic weather application communicating with RESTful Web APIs via asynchronous JavaScript Fetch. Features defensive error boundaries for API exceptions, structural programmatic node generation, live data injection (humidity, local time, timezone tracking), and instant remote asset rendering.",
    // Project 5
    p5Title: "2D Arcade Shooter Game",
    p5Desc:
      "A dynamic 2D arcade shooter built on HTML5 Canvas using Object-Oriented JavaScript (ES6 Modules). Features an isolated game loop, velocity vectors, real-time collision detection formulas, custom particles system, and asynchronous configuration fetching across 10 progressive JSON levels.",
    aboutMeTitle: "About Me",
    aboutBio:
      "Results-driven Computer Engineering graduate from Birzeit University and certified Full-Stack Developer. I possess hands-on experience in building scalable web structures and implementing responsive web architectures with modern front-end frameworks.",
    skillsTitle: "Technical Proficiencies",
    // Contact Section
    contactTitle: "Get In Touch",
    contactPrompt:
      "Feel free to reach out for collaborations or opportunities!",
    contactEmail: "Email:",
    contactLocation: "Location:",
    myLocation: "Qalqilya, Palestine",
    contactPhone: "Phone:",
    contactLinkedIn: "LinkedIn:",
    contactGitHub: "GitHub:",
    liveDemo: "Live Demo",
  },
  ar: {
    navWorks: "أعمالي",
    navAbout: "من أنا",
    langText: "EN",
    heroTitle: "أهلاً، أنا علاء أحمد",
    heroSubtitle: "خريج هندسة حاسوب ومطور ويب متكامل",
    sectionWorksTitle: "المشاريع المميزة",
    // المشروع الأول
    p1Title: "إدارة طلبات التواصل (Making Connections)",
    p1Desc:
      "لوحة تحكم ديناميكية تفاعلية لإدارة الحساب وطلبات التواصل الاجتماعي. تم تطويرها عبر معالجة متقدمة لعناصر الـ DOM لإتاحة قبول أو رفض الطلبات، وعزل البيانات الرقمية لتحديث عدادات الأصدقاء والطلبات فورياً وبشكل حيوي.",
    // المشروع الثاني
    p2Title: "طقس فلسطين (Palestine Weather)",
    p2Desc:
      "لوحة عرض وتنبؤ بحالة الطقس تدعم التحويل الديناميكي لدرجات الحرارة بين المئوية والفهرنهايت، ونظام محلي للموافقة على ملفات تعريف الارتباط. يتضمن ميزة الحقن البرمجي لكروت الطقس الجديدة فورياً في الـ DOM مع دعم كامل لمرونة وتجاوب التصميم.",
    // المشروع الثالث
    p3Title: "آلة حاسبة تفاعلية (Calculator)",
    p3Desc:
      "آلة حاسبة برمجية متكاملة تدعم تقييم ومعالجة التعبيرات الرياضية فورياً. تم بناؤها باستخدام خاصية تفويض الأحداث (Event Delegation) لإدارة نقرات الأزرار، وتحليل الرموز النصية برمجياً عبر مصفوفات مخصصة لتنفيذ الحسابات مع تفعيل جدار حماية لمنع الأخطاء الحسابية مثل القسمة على صفر.",
    // المشروع الرابع
    p4Title: "تطبيق الطقس العالمي (Weather App)",
    p4Desc:
      "تطبيق طقس حيوي يتواصل مع واجهات برمجة التطبيقات RESTful APIs الخارجية باستخدام الـ Fetch والبرمجة غير المتزامنة Asynchronous JavaScript. يتضمن ميزات جدار الحماية ضد استثناءات الـ API، وتوليد عناصر الـ DOM برمجياً وعرض تفاصيل الرطوبة، التوقيت المحلي، النطاق الزمني، وحقن الأيقونات الحية المستضافة عن بُعد فورياً.",
    // المشروع الخامس
    p5Title: "لعبة إطلاق نار ثنائية الأبعاد (2D Arcade Game)",
    p5Desc:
      "لعبة حركة ثنائية الأبعاد مبنية على بيئة الرسم HTML5 Canvas باستخدام الهيكلية كائنية التوجه (OOP) ووحدات ES6. تتضمن حلقة ألعاب معزولة (Game Loop)، وحساب متجهات السرعة، وخوارزميات رصد التصادم فورياً، ونظام جزيئات متطور، مع جلب إعدادات الصعوبة برمجياً وتدريجياً عبر 10 مستويات محملة من ملفات JSON.",
    aboutMeTitle: "من أنا",
    aboutBio:
      "خريج هندسة حاسوب من جامعة بيرزيت ومطور ويب متكامل معتمد. أمتلك خبرة عملية في بناء تطبيقات الويب القابلة للتوسع وتطوير واجهات مستخدم متجاوبة باستخدام أحدث التقنيات.",
    skillsTitle: "المهارات والخبرات التقنية",
    // قسم الاتصال
    contactTitle: "تواصل معي",
    contactPrompt: "لا تتردد في التواصل معي بخصوص الشراكات أو الفرص المهنية!",
    contactEmail: "البريد الإلكتروني:",
    contactLocation: "الموقع:",
    myLocation: "قلقيلية، فلسطين",
    contactPhone: "الهاتف:",
    contactLinkedIn: "لينكد إن:",
    contactGitHub: "جيت هاب:",
    liveDemo: "معاينة حية",
  },
};
