// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-short-cv",
          title: "short cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "news-presenting-a-live-demo-at-ces-2024-las-vegas-usa",
          title: 'Presenting a live demo at CES 2024, Las Vegas, USA.',
          description: "",
          section: "News",},{id: "news-presenting-a-live-demo-on-autonomous-assembly-at-icra-2024-yokohama-japan",
          title: 'Presenting a live demo on Autonomous Assembly at ICRA 2024, Yokohama, Japan.',
          description: "",
          section: "News",},{id: "news-presenting-5-papers-at-iros-2024",
          title: 'Presenting 5 papers at IROS 2024.',
          description: "",
          section: "News",},{id: "news-serving-as-a-session-chair-for-human-robot-collaboration-at-icra-2025",
          title: 'Serving as a session chair for Human-Robot Collaboration at ICRA 2025.',
          description: "",
          section: "News",},{id: "news-presenting-2-papers-at-icra-2025",
          title: 'Presenting 2 papers at ICRA 2025.',
          description: "",
          section: "News",},{id: "news-we-are-hiring-a-ph-d-student-for-an-hri-internship-please-apply-here",
          title: 'We are hiring a Ph.D. student for an HRI internship. Please apply here....',
          description: "",
          section: "News",},{id: "news-we-are-hiring-a-ph-d-student-for-robot-learning-perception-internship-please-apply-here",
          title: 'We are hiring a Ph.D. student for Robot Learning / Perception internship. Please...',
          description: "",
          section: "News",},{id: "news-2-papers-have-been-accepted-for-publication-at-icra-2026-vienna-austria",
          title: '2 papers have been accepted for publication at ICRA 2026, Vienna, Austria.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
