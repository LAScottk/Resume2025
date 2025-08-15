// Experience Data for Scott M. Kanas Resume
const experienceData = [
    {
        company: "Accenture Song",
        role: "Song Account Leader",
        dates: "2022 – Present",
        description: "Member of the Accenture account teams for a Fortune 5 client and a top 3 Telecommunications firm. P&L responsibilities for marketing technology programs within the client's consumer-facing storefronts, including a staff of 50 and annual revenue > $20M. Directly responsible for ecosystem software vendor alliances in support of my clients.",
        projects: [
            {
                title: "<i data-lucide='bar-chart-3'></i> Marketing Publishing Transformation",
                description: "Transformed processes and tooling of a marketing platform to reduce costs while increasing volume 40+% per year using AI publishing agents, pre-created headless content modules, and process transformations. Projected to save $20M+ over 3 years while improving time-to-market and personalization capabilities."
            },
            {
                title: "<i data-lucide='brain'></i> Consolidated Knowledge Base for 70,000 Employees",
                description: "Converted $300K investment into a multi-year sale of $5M+. Led audit of another vendor's challenged implementation identifying material quality gaps and root causes. Designed and conducted 10 AI capability demos and crafted a new team to take over maintenance and development from the legacy vendor."
            },
            {
                title: "<i data-lucide='test-tube'></i> A/B Testing Program",
                description: "Completely turned around troubled program. Developed client relationship to highest possible CSAT rating and a 3-year renewal with +3% margin. Deployed new cycle time monitoring and process automations that improved SLA results by 70%."
            },
            {
                title: "<i data-lucide='star'></i> Product Management Services",
                description: "Won competitive bid for product management services for 3+ years and > $10M. Developed new workflow tools and operating processes that automated 80% of executive reporting."
            },
            {
                title: "<i data-lucide='target'></i> MarTech Transformation",
                description: "For global advertising division, sold and solutioned MarTech transformation including sites, e-mail, and analytics. Successfully delivered new platform one month early and over $1M under budget, resulting in the fastest AEM platform launch among comparable programs in prior 4 years."
            },
            {
                title: "<i data-lucide='wrench'></i> Workflow Automation Strategy",
                description: "Strategy sponsor for custom workflow application merchandising, promotions, and localization across 3+ digital storefronts. Defined a new strategy that turned the workflow tool into a business application with integrated analytics, real-time dynamic pricing, and GenAI capabilities."
            }
        ]
    },
    {
        company: "Accenture Song",
        role: "Experience Architect",
        dates: "2021 – 2022",
        description: "Multi-service strategist and delivery leader across Technology, Design, Marketing Services, and Analytics.",
        projects: [
            {
                title: "<i data-lucide='building'></i> Investment Firm Portal Transformation",
                description: "Led solution strategy and planning phase for $50M+ transformation of consumer-facing portal for investments impacting ~$2T+ assets under management."
            }
        ]
    },
    {
        company: "Deloitte Digital",
        role: "Senior Manager, Advertising, Marketing & Commerce",
        dates: "2018 – 2021",
        description: "Designed and executed marketing technology programs for global Fortune 100 clients. Served as practice lead for Marketing Resource Management (MRM) and global assets lead for the Adobe alliance.  Developed alliances with varied software vendors and built the Deloitte Workfront practice.",
        projects: [
            {
                title: "<i data-lucide='heart-pulse'></i> Integrated Healthcare Provider",
                description: "Stood up new digital product development teams for consumer experiences impacting ~12M members. Anticipated multi-year engagement with 300+ consulting staff."
            },
            {
                title: "<i data-lucide='briefcase'></i> Global B2B Software Provider",
                description: "Built new digital analytics and web capabilities including self-service dashboards and BI integrations. Reduced custom analytics requests by 50% and time-to-market by 80%."
            },
            {
                title: "<i data-lucide='building'></i> Real Estate & Entertainment Venue",
                description: "Developed solution architecture and program plan for a 3-year, $50M engagement including advertising, experience design, web content, and mobile applications."
            }
        ]
    },
    {
        company: "iCrossing",
        role: "Vice President, Technology Management",
        dates: "2016 – 2018",
        description: "Executive leader for all technology delivery for the western region, ~50-person department and ~15% of worldwide revenue.",
        achievements: [
            "Re-structured $8M annual retainer with 20% reduction in maintenance work, 30% improvement in client satisfaction, and 20% margin increase",
            "Introduced new project accounting tools enabling future revenue and net income predictions",
            "Led agile transformation training 60 CSM's and CSPO's across entire division",
            "Created DevOps capabilities saving ~4% of total budget",
            "Developed rapid prototyping offering for three largest clients"
        ]
    },
    {
        company: "Acquity Group",
        role: "Director / Engagement Director",
        dates: "2012 – 2016",
        description: "Acquired by Accenture Interactive",
        achievements: [
            "Led delivery of client's first iOS native mobile app with 35+ team members and $12M budget",
            "Rescued troubled Hybris eCommerce program, delivering within two weeks of target date and 5% over budget",
            "Managed Adobe AEM 6.0 implementation while still in beta under fixed-fee terms",
            "Doubled mobile app practice sales pipeline in first four months as Solution Lead",
            "Oversaw delivery quality of $18M cross-device connected vehicle mobile applications"
        ]
    },
    {
        company: "Earlier Experience",
        role: "Management Consultant & Systems Analyst",
        dates: "2004 – 2012",
        description: "Slalom Consulting (2011-2012) • Strategic Vision Consulting (2005-2011) • Deloitte Consulting (2004-2005)",
        achievements: [
            "Led business case team for AssetServ product securing $8M in seed funding",
            "Managed global DAM solution integrating 10 software packages, exceeding growth projections by 200%"
        ]
    }
];

// Function to render experience data
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = experienceData.map(job => {
        let content = `
            <div class="experience-item">
                <div class="company-header">
                    <div class="company-info">
                        <h3 class="company-name">${job.company}</h3>
                        <div class="role-dates">
                            <span class="role-title">${job.role}</span>
                            <span class="dates-inline">${job.dates}</span>
                        </div>
                        <p class="job-description">${job.description}</p>
                    </div>
                    <button class="job-collapse-btn"><span>−</span></button>
                </div>
                <div class="job-content">`;

        if (job.projects) {
            content += `
                    <div class="project-grid">
                        ${job.projects.map(project => `
                            <div class="project-item">
                                <div class="project-header">
                                    <div class="project-title">${project.title}</div>
                                    <button class="expand-btn">+</button>
                                </div>
                                <div class="project-description">${project.description}</div>
                            </div>
                        `).join('')}
                    </div>`;
        }

        if (job.achievements) {
            content += job.achievements.map(achievement => 
                `<div class="achievement-item">${achievement}</div>`
            ).join('');
        }

        content += `
                </div>
            </div>`;

        return content;
    }).join('');
}