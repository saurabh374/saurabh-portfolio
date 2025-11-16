export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://saurabh374.github.io/#person",
        name: "Saurabh Patil",
        url: "https://saurabh374.github.io",
        image: "https://saurabh374.github.io/profile.jpg",
        jobTitle: "Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance"
        },
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "MySQL",
          "Redis",
          "RabbitMQ",
          "AWS",
          "Full Stack Development"
        ],
        sameAs: [
          "https://github.com/saurabh374",
          "https://linkedin.com/in/iamsaurabhp"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://saurabh374.github.io/#website",
        url: "https://saurabh374.github.io",
        name: "Saurabh Patil Portfolio",
        description:
          "Software Engineer and Full Stack Developer portfolio featuring React, Next.js, Node.js, and scalable backend systems.",
        publisher: {
          "@id": "https://saurabh374.github.io/#person"
        },
        inLanguage: "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://saurabh374.github.io/#webpage",
        url: "https://saurabh374.github.io",
        name: "Saurabh Patil - Software Engineer & Full Stack Developer",
        isPartOf: {
          "@id": "https://saurabh374.github.io/#website"
        },
        about: {
          "@id": "https://saurabh374.github.io/#person"
        },
        description:
          "Professional portfolio showcasing full-stack web development, distributed systems, and cloud-based applications."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
