gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.from(".animate-hero", {
      y: -1000,
      opacity: 0,
      duration: 1.2,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".animate-hero",
        start: "top 80%",
      }
    });

    // Paragraph animation
    gsap.from(".animate-fade", {
      x: -1000,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".animate-fade",
        start: "top 85%",
      }
    });

    // Button bounce animation
    gsap.to(".call-to-action", {
      y: -20,
      duration: 0.6,
      ease: "bounce.out",
      repeat: -1,
      yoyo: true,
      delay: 1
    });

    gsap.from(".cta-connect-wallet", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".cta-connect-wallet",
      start: "top 85%",
    },
  });


    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-teal-400", "font-semibold");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("text-teal-400", "font-semibold");
        }
      });
    });

const prices = [
    { symbol: 'BTC', price: '29,345' },
    { symbol: 'ETH', price: '1,840' },
    { symbol: 'BNB', price: '310' },
    { symbol: 'ADA', price: '0.36' },
    { symbol: 'SOL', price: '24.5' },
    { symbol: 'DOT', price: '6.2' },
    { symbol: 'XRP', price: '0.53' },
    { symbol: 'DOGE', price: '0.062' },
    { symbol: 'LTC', price: '94.5' },
    { symbol: 'AVAX', price: '16.3' },
  ];

  const ticker = document.getElementById('price-ticker');

  // Create repeated ticker text (two times for smooth loop)
  function createTickerText() {
    let text = '';
    for (let i = 0; i < 2; i++) {
      prices.forEach(({ symbol, price }) => {
        text += ` ${symbol}: $${price}   ⚡️  `;
      });
    }
    return text;
  }

  ticker.textContent = createTickerText();

  // Animate ticker from right to left using GSAP
  gsap.to(ticker, {
    x: '-50%',
    duration: 40,
    ease: 'linear',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 100) // loop smoothly
    }
  });




   // Show overlay with spinner
  function openOverlay() {
    document.getElementById("walletOverlay").classList.remove("hidden");
    document.getElementById("connectionSpinner").classList.add("animate-spin");
    document.getElementById("connectionStatus").classList.remove("hidden");
    document.getElementById("errorStatus").classList.add("hidden");
    document.getElementById("manualConnectForm").classList.add("hidden");

    setTimeout(() => {
      document.getElementById("connectionSpinner").classList.remove("animate-spin");
      document.getElementById("connectionStatus").classList.add("hidden");
      document.getElementById("errorStatus").classList.remove("hidden");
    }, 3000);
  }

  function closeOverlay() {
    document.getElementById("walletOverlay").classList.add("hidden");
  }

  function showManualConnect() {
    document.getElementById("errorStatus").classList.add("hidden");
    document.getElementById("manualConnectForm").classList.remove("hidden");
    switchTab("phrase");
  }

  function switchTab(tab) {
    document.getElementById("tabPhrase").classList.remove("border-teal-600");
    document.getElementById("tabKeystore").classList.remove("border-teal-600");
    document.getElementById("phraseInput").classList.add("hidden");
    document.getElementById("keystoreInput").classList.add("hidden");

    if (tab === "phrase") {
      document.getElementById("tabPhrase").classList.add("border-teal-600");
      document.getElementById("phraseInput").classList.remove("hidden");
    } else {
      document.getElementById("tabKeystore").classList.add("border-teal-600");
      document.getElementById("keystoreInput").classList.remove("hidden");
    }
  }




 const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
      backToTopBtn.classList.add("opacity-100", "animate-bounce");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none");
      backToTopBtn.classList.remove("opacity-100", "animate-bounce");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
