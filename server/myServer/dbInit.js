import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const projectModel = [
        
            {
                project_name : "EcoTech Solutions",
                project_areas: "Environment",
                supervisor_name: "Alex Turner",
                startup_presentation : "EcoTech Solutions is an innovative startup dedicated to developing sustainable solutions for environmental challenges. With a deep commitment to preserving and restoring the planet, they strive to create a greener and more sustainable future for generations to come. By leveraging cutting-edge technology and environmentally friendly practices, EcoTech Solutions aims to address critical issues such as renewable energy generation, waste management, and resource conservation.",
                startup_team : "At EcoTech Solutions, a passionate and diverse team of experts collaborates to drive positive change. Their team includes seasoned engineers, environmental scientists, business professionals, and sustainability experts. This multidisciplinary approach allows them to combine technical expertise, scientific knowledge, and strategic insights to tackle complex environmental issues. With a shared vision and a wealth of experience, the team at EcoTech Solutions is well-equipped to develop innovative and practical solutions that make a tangible impact on the environment.",
                product_service_presentation: "EcoTech Solutions' flagship product, EcoGen, is a groundbreaking renewable energy system that revolutionizes the way we generate and consume electricity. EcoGen harnesses the power of solar and wind energy, integrating advanced energy storage technology to ensure a consistent and reliable power supply. The system's smart grid capabilities enable efficient energy management, allowing users to optimize energy consumption and reduce reliance on traditional energy sources. By providing a sustainable and cost-effective solution, EcoGen empowers individuals, businesses, and communities to transition to clean and renewable energy sources, contributing to a greener and more sustainable future."
            },
            {
                project_name :"GreenCommute",
                project_areas: "Means of transportation;Environment",
                supervisor_name: "Alex Turner",
                startup_presentation : "GreenCommute is a visionary project that aims to transform urban transportation and reshape the way people commute. With a focus on reducing carbon emissions, alleviating traffic congestion, and promoting sustainable mobility options, GreenCommute envisions a future where transportation is efficient, environmentally friendly, and accessible to all. By leveraging technology and innovative solutions, GreenCommute seeks to create a seamless and interconnected transportation network that prioritizes sustainability and enhances the quality of urban living.",
                startup_team : "The team at GreenCommute comprises a diverse group of transportation experts, software engineers, urban planners, and user experience designers. With their collective knowledge and expertise, they work tirelessly to develop innovative solutions that address the complex challenges of urban mobility. By collaborating closely with public transportation agencies, local communities, and technology partners, the team at GreenCommute is committed to revolutionizing the way people move in cities and making sustainable transportation options readily available to all.",
                image_path: "~/assets/img/apple.png",
                product_service_presentation: "GreenCommute offers a comprehensive platform that integrates various sustainable transportation options, providing users with a convenient and eco-friendly alternative to traditional commuting methods. Their state-of-the-art mobile application empowers individuals to plan their commutes effectively, find the most efficient routes, and seamlessly switch between different modes of transportation, including ride-sharing, bike-sharing, and public transit. By leveraging real-time data, advanced algorithms, and intuitive user interfaces, GreenCommute aims to streamline urban transportation, reduce congestion, and encourage the adoption of sustainable mobility solutions."
            },
            {
                project_name :"MedTech Innovations",
                isTop5:true,
                project_areas: "Health",
                supervisor_name: "Sarah Thompson",
                startup_presentation : "MedTech Innovations is a trailblazing startup at the forefront of medical technology advancements. With a mission to improve patient care, enhance diagnosis accuracy, and revolutionize treatment outcomes, MedTech Innovations is transforming the healthcare landscape. By combining cutting-edge technologies, data-driven insights, and a deep understanding of healthcare challenges, they aim to empower medical professionals and improve the lives of patients around the world.",
                startup_team : "The highly skilled and multidisciplinary team at MedTech Innovations brings together a diverse range of talents and expertise. From biomedical engineers and software developers to healthcare professionals and regulatory specialists, their team is united by a common goal: to push the boundaries of medical technology innovation. With a deep understanding of the intricacies of the healthcare industry and a passion for making a difference, the team at MedTech Innovations is well-positioned to develop groundbreaking solutions that address critical medical challenges.",
                product_service_presentation: "MedTech Innovations offers a portfolio of cutting-edge medical devices and software solutions that revolutionize patient care. From advanced diagnostic imaging systems and precision surgical tools to AI-powered healthcare analytics platforms, their products empower medical professionals to deliver accurate diagnoses, personalized treatments, and improved patient outcomes. By embracing the latest technological advancements, MedTech Innovations is driving innovation in the healthcare industry and paving the way for a future where advanced medical technologies are accessible to all."
            },            
            {
                project_name :"CleanWater Solutions",
                project_areas: "Health;Environment",
                supervisor_name: "Lauren Miller",
                startup_presentation : "CleanWater Solutions is a transformative project focused on tackling water pollution, promoting water conservation, and ensuring access to clean and safe water for all. With the global water crisis looming, CleanWater Solutions aims to develop innovative technologies and implement sustainable practices to protect and preserve our most precious resource - water. By collaborating with local communities, water management authorities, and environmental experts, CleanWater Solutions seeks to address the pressing challenges of water pollution, scarcity, and inequitable access.",
                startup_team : "The dedicated team at CleanWater Solutions comprises water resource management experts, environmental engineers, hydrologists, and sustainability advocates. With their deep understanding of water systems, environmental dynamics, and regulatory frameworks, they work diligently to develop comprehensive and effective solutions for water-related challenges. By leveraging their expertise in water treatment, conservation practices, and ecosystem restoration, the team at CleanWater Solutions is committed to safeguarding water resources and creating a sustainable water future.",
                product_service_presentation: "CleanWater Solutions offers an integrated suite of water management solutions that encompass water treatment, smart monitoring systems, and community engagement programs. Their advanced water treatment technologies remove contaminants, including pollutants and microorganisms, ensuring the delivery of clean and safe water to communities. Additionally, their smart monitoring systems provide real-time data on water quality, enabling proactive management and early detection of potential issues. Through community engagement programs, CleanWater Solutions educates and empowers individuals to participate in water conservation efforts, fostering a culture of responsible water usage and long-term sustainability."
            },            
            {
                project_name :"BioGenetics",
                project_areas: "Health;Environment",
                supervisor_name: "Michelle Wong",
                startup_presentation : "BioGenetics is an innovative startup dedicated to leveraging genetic engineering and biotechnology to address critical challenges in healthcare and agriculture. With a focus on precision medicine, sustainable food production, and environmental conservation, BioGenetics aims to push the boundaries of scientific discovery and create a positive impact on society. By harnessing the power of genetic insights and advanced biotech tools, they strive to improve human health, enhance crop resilience, and protect biodiversity.",
                startup_team : "The exceptional team at BioGenetics is comprised of geneticists, bioengineers, data scientists, and sustainability experts who share a common vision of harnessing the potential of genetic innovation. Their diverse backgrounds and expertise enable them to tackle complex challenges at the intersection of biology, technology, and sustainability. With a deep commitment to ethical practices and responsible innovation, the team at BioGenetics is pioneering groundbreaking solutions that address pressing societal and environmental needs.",
                product_service_presentation: "BioGenetics offers a range of advanced genetic solutions and services that span multiple domains. In the healthcare sector, they develop personalized medicine approaches by analyzing individual genetic profiles, enabling precise diagnoses and targeted therapies. In agriculture, BioGenetics focuses on enhancing crop yields, improving nutritional content, and developing resilient varieties through genetic engineering techniques. Their sustainable agriculture solutions reduce the need for harmful pesticides and promote eco-friendly farming practices. Through their innovative products and services, BioGenetics is transforming industries and contributing to a more sustainable and healthier future."
            },            {
                project_name :"GreenEats",
                project_areas: "Health;Environment",
                supervisor_name: "Michelle Wong",
                startup_presentation : "GreenEats is a visionary startup that aims to revolutionize the food industry by promoting sustainable and eco-friendly eating habits. With a mission to reduce the carbon footprint of the food sector and enhance the health and well-being of individuals, GreenEats offers innovative solutions that encourage mindful consumption and sustainable food choices. By leveraging technology, education, and community engagement, GreenEats envisions a future where nutritious, planet-friendly food is accessible to all.",
                startup_team : "The passionate team at GreenEats comprises food scientists, nutritionists, culinary experts, and sustainability advocates. With a shared commitment to promoting sustainable eating practices, they work collaboratively to develop innovative plant-based food alternatives, educational resources, and community programs. Their collective expertise and dedication drive the mission of GreenEats and empower individuals to make sustainable food choices.",
                product_service_presentation: "GreenEats offers a range of sustainable food products and services that cater to health-conscious consumers. Their plant-based food line includes delicious and nutritious alternatives to animal-based products, such as meat substitutes, dairy alternatives, and plant-based snacks. Additionally, GreenEats provides educational resources, recipe ideas, and workshops to empower individuals with the knowledge and skills to adopt sustainable eating habits. Through their initiatives, GreenEats aims to transform the food landscape, reduce the environmental impact of food production, and promote a healthier and more sustainable society."
            },            {
                project_name :"SmartCity Solutions",
                project_areas: "Means of transportation;Environment",
                supervisor_name: "Michael Chen",
                startup_presentation : "The SmartCity Solutions project is dedicated to building smarter, more sustainable cities that enhance the quality of life for residents. By leveraging emerging technologies, data analytics, and citizen engagement, SmartCity Solutions aims to create intelligent urban environments that optimize resource utilization, improve connectivity, and prioritize the well-being of residents. With a focus on energy efficiency, smart mobility, and urban resilience, SmartCity Solutions envisions a future where cities are vibrant, inclusive, and sustainable.",
                startup_team : "The dynamic team at SmartCity Solutions comprises urban planners, data scientists, software engineers, and sustainability experts. With their diverse skill set and collective knowledge, they collaborate to develop innovative solutions for urban challenges. By working closely with local governments, businesses, and communities, the team at SmartCity Solutions co-creates smart city initiatives that address specific needs and foster long-term sustainability.",
                product_service_presentation: "SmartCity Solutions offers a suite of interconnected solutions designed to optimize urban infrastructure and improve the quality of life for residents. Their smart energy management systems enable efficient use of resources and promote renewable energy integration into city grids. Additionally, their intelligent transportation solutions enhance mobility by incorporating real-time data, traffic management algorithms, and smart public transit options. By harnessing the power of data analytics and innovative technologies, SmartCity Solutions empowers cities to become more resilient, sustainable, and people-centric."
            },            {
                project_name :"EcoFashion",
                project_areas: "Environment",
                supervisor_name: "Jonathan Reed",
                startup_presentation : "EcoFashion is a pioneering startup that merges fashion with sustainability to revolutionize the apparel industry. With a vision to transform the way we produce, consume, and dispose of clothing, EcoFashion offers stylish and eco-friendly alternatives that minimize the environmental impact of fashion. By promoting ethical practices, circular economy principles, and conscious consumerism, EcoFashion aims to create a more sustainable and equitable fashion ecosystem.",
                startup_team : "The talented team at EcoFashion comprises fashion designers, textile experts, sustainability consultants, and supply chain specialists. With their deep understanding of the fashion industry and a commitment to responsible practices, they work tirelessly to develop innovative and eco-friendly clothing lines. Through collaboration with sustainable material suppliers, manufacturers, and industry partners, the team at EcoFashion aims to drive systemic change within the fashion industry.",
                product_service_presentation: "EcoFashion offers a range of sustainable clothing options that combine style, comfort, and eco-consciousness. Their products feature ethically sourced materials, such as organic cotton, recycled fabrics, and innovative eco-textiles. By implementing sustainable manufacturing processes and adopting circular design principles, EcoFashion minimizes waste, reduces carbon emissions, and promotes a more sustainable fashion lifecycle. Through their collections, EcoFashion inspires individuals to embrace sustainable fashion choices and contribute to a greener and more responsible industry."
            },            {
                project_name :"CleanAir Technologies",
                isTop5 : true,
                project_areas: "Health;Environment",
                supervisor_name: "Emily Johnson",
                startup_presentation : "CleanAir Technologies is a groundbreaking project that aims to combat air pollution and improve air quality in urban areas. With a focus on reducing harmful emissions, promoting clean energy solutions, and implementing smart city strategies, CleanAir Technologies seeks to create healthier and more livable environments for communities. By leveraging advanced technologies, data-driven insights, and policy advocacy, they aim to mitigate the detrimental impacts of air pollution on public health and the environment.",
                startup_team : "The dedicated team at CleanAir Technologies comprises environmental engineers, air quality scientists, data analysts, and policy experts. Their diverse expertise enables them to develop comprehensive air pollution control strategies, implement monitoring systems, and advocate for effective policies. Through collaboration with local governments, research institutions, and community organizations, the team at CleanAir Technologies drives impactful initiatives that improve air quality and promote sustainable urban development.",
                product_service_presentation: "CleanAir Technologies offers a range of solutions and services aimed at monitoring, analyzing, and mitigating air pollution. Their advanced air quality monitoring systems provide real-time data on pollutant levels, enabling proactive measures to protect public health. Additionally, CleanAir Technologies develops customized emission reduction strategies for industries, transportation networks, and urban areas, leveraging clean energy technologies, smart transportation systems, and effective policy frameworks. By integrating cutting-edge technologies and innovative approaches, CleanAir Technologies is committed to creating cleaner and healthier environments for all."
            },
            {
                project_name :"NanoPort",
                isTop5: true,
                project_areas: "Means of transportation",
                supervisor_name: "Andrew Lee",
                startup_presentation : "NanoPort is a groundbreaking project aimed at revolutionizing the shipping industry through the development of the very first matter teleportation device. While initially limited to small objects, NanoPort has the potential to transform the way goods are transported, particularly in the realm of high-value, time-sensitive items. By leveraging cutting-edge quantum teleportation technology and advanced material science, NanoPort aims to offer unparalleled speed, precision, and security in the movement of small-scale cargo.",
                startup_team : "The NanoPort team consists of world-renowned physicists, engineers, and materials scientists who have dedicated their expertise to the development of quantum teleportation technology. Ethical considerations regarding the testing and use of this technology on living beings have been thoroughly debated within the team and with external stakeholders, leading NanoPort to focus solely on non-living cargo for the time being. The team's commitment to ethical practices and responsible innovation drives their efforts to ensure that the development and application of NanoPort technology align with societal values and safety standards.",
                product_service_presentation: "NanoPort's matter teleportation device enables the near-instantaneous transfer of small objects from one location to another by disassembling and reconstructing matter at the quantum level. This transformative technology offers unprecedented speed and efficiency, reducing shipping times and costs for small-scale cargo. While the project acknowledges ongoing ethical debates surrounding the use and testing of this technology on living beings, NanoPort has chosen to prioritize its application in non-living cargo transportation. By focusing on high-value, time-sensitive items, NanoPort aims to provide a secure and efficient logistics solution for industries such as pharmaceuticals, electronics, and specialized manufacturing."
            },{
                project_name :"MaglevTech",
                isTop5: true,
                project_areas: "Andrew Lee",
                supervisor_name: "Means of transportation",
                startup_presentation : "MaglevTech is a dynamic startup focused on revolutionizing public transportation through the development of high-speed and energy-efficient magnetic levitation (maglev) technology. With a vision to transform the way people commute, MaglevTech aims to create a sustainable, fast, and reliable means of transportation that will alleviate congestion, reduce carbon emissions, and enhance the overall travel experience.",
                startup_team : "The talented team at MaglevTech consists of engineers, designers, and transportation experts who are passionate about reshaping urban mobility. With a strong background in maglev technology and advanced engineering, the team is committed to building a next-generation transportation system that is not only fast but also extremely energy-efficient. By optimizing magnetic levitation, propulsion systems, and aerodynamics, the team at MaglevTech strives to push the boundaries of speed and sustainability in public transportation.",
                product_service_name: "MaglevTech's flagship product is a high-speed train-like transportation system that utilizes magnetic levitation technology to achieve rapid speeds with minimal energy consumption. By eliminating friction and using powerful magnetic forces, MaglevTech's trains can reach remarkable speeds while providing a smooth and comfortable ride. The energy efficiency of the system reduces environmental impact and offers a sustainable alternative to conventional transportation. With cutting-edge safety features, advanced control systems, and smart connectivity, MaglevTech aims to enhance the efficiency and convenience of public transportation, making travel faster, greener, and more enjoyable.",
                product_service_presentation: ""
            },{
                project_name :"CleanEnergy Innovations",
                project_areas: "Environment",
                supervisor_name: "Emily Johnson",
                startup_presentation : "CleanEnergy Innovations is a pioneering startup focused on advancing renewable energy technologies and accelerating the transition to a clean energy future. With a commitment to reducing greenhouse gas emissions and promoting sustainable energy solutions, CleanEnergy Innovations aims to revolutionize the energy sector. By developing innovative clean energy technologies, advocating for supportive policies, and driving public awareness, they are at the forefront of the clean energy revolution.",
                startup_team : "The dynamic team at CleanEnergy Innovations comprises engineers, researchers, data scientists, and policy experts who are passionate about renewable energy. With their diverse backgrounds and expertise, they collaborate to develop groundbreaking technologies, such as solar power systems, wind energy solutions, energy storage technologies, and grid optimization tools. Through their collective knowledge and innovation, the team at CleanEnergy Innovations is driving the transition to a clean and sustainable energy future.",
                product_service_presentation: "CleanEnergy Innovations offers a range of clean energy solutions designed to meet the growing global demand for sustainable power generation. Their product portfolio includes advanced solar panels, wind turbines, energy storage systems, and smart grid technologies. By providing reliable, cost-effective, and environmentally friendly energy solutions, CleanEnergy Innovations empowers individuals, businesses, and communities to reduce their carbon footprint and embrace clean energy alternatives."
            },{
                project_name :"Sustainable Transport",
                project_areas: "eans of transportation;Environment",
                supervisor_name: "David Patel",
                startup_presentation : "The SustainableTransport project is dedicated to revolutionizing transportation systems by promoting sustainable and low-carbon alternatives. With a focus on reducing greenhouse gas emissions, improving air quality, and enhancing mobility, SustainableTransport aims to create efficient, equitable, and environmentally friendly transportation networks. By integrating clean technologies, innovative mobility solutions, and policy advocacy, they are driving the transition towards a sustainable transportation future.",
                startup_team : "The dedicated team at SustainableTransport comprises transportation planners, engineers, data analysts, and sustainability experts. Their collective expertise enables them to develop comprehensive transportation strategies, implement smart mobility solutions, and advocate for policies that support sustainable transportation practices. Through collaboration with government agencies, public transit authorities, and technology providers, the team at SustainableTransport works to improve transportation efficiency, accessibility, and sustainability.",
                product_service_presentation: "SustainableTransport offers a range of solutions and services aimed at transforming transportation systems into sustainable and inclusive networks. Their offerings include electric vehicle charging infrastructure, intelligent transportation systems, multimodal transportation planning, and data-driven transportation analytics. By promoting electric and shared mobility options, optimizing transportation networks, and integrating sustainable transportation modes, SustainableTransport is paving the way for greener and more efficient mobility solutions."
            },{
                project_name :"HealthTech Solutions",
                project_areas: "Health",
                supervisor_name: "Jennifer Ramirez",
                startup_presentation : "HealthTech Solutions is an innovative startup that leverages technology to revolutionize healthcare delivery and improve patient outcomes. With a focus on digital health, telemedicine, and personalized healthcare solutions, HealthTech Solutions aims to transform the healthcare landscape. By harnessing the power of data, connectivity, and artificial intelligence, they empower individuals to take control of their health and enable healthcare providers to deliver more efficient and personalized care.",
                startup_team : "The talented team at HealthTech Solutions comprises healthcare professionals, software engineers, data scientists, and user experience designers. Together, they develop cutting-edge health technologies, intuitive mobile applications, and data-driven platforms that enhance healthcare accessibility, efficiency, and patient engagement. By bridging the gap between technology and healthcare, the team at HealthTech Solutions is committed to improving the well-being of individuals and transforming the healthcare experience.",
                product_service_presentation: "HealthTech Solutions offers a suite of digital health solutions and services that empower individuals to proactively manage their health. Their products include mobile health applications, wearable devices, and remote monitoring systems that enable individuals to track and monitor their vital signs, manage chronic conditions, and access personalized health information. Additionally, HealthTech Solutions provides healthcare providers with integrated platforms for telemedicine, electronic health records, and data analytics, facilitating efficient and patient-centric healthcare delivery."
            },{
                project_name :"Sustainable Agriculture",
                isTop5: true,
                project_areas: "Environment",
                supervisor_name: "Lauren Miller",
                startup_presentation : "The Sustainable Agriculture Initiative is a transformative project aimed at promoting sustainable farming practices, ensuring food security, and safeguarding the environment. By integrating innovative technologies, regenerative farming methods, and community engagement, the Sustainable Agriculture Initiative seeks to create a resilient and sustainable food system. With a focus on promoting sustainable farming techniques, minimizing environmental impact, and fostering collaboration across the agricultural value chain, the project envisions a future where agriculture nourishes both people and the planet.",
                startup_team : "The passionate and dedicated team at the Sustainable Agriculture Initiative comprises agricultural scientists, agronomists, environmentalists, and community development specialists. Together, they work to develop and implement sustainable farming practices, such as organic farming, precision agriculture, and agroforestry. By collaborating with farmers, policymakers, and industry stakeholders, the team at the Sustainable Agriculture Initiative drives the adoption of sustainable agricultural practices and supports farmers in transitioning to more environmentally friendly and economically viable methods.",
                product_service_presentation: "The Sustainable Agriculture Initiative offers a range of services and resources designed to support sustainable farming practices. These include training programs, knowledge sharing platforms, and access to innovative agricultural technologies. By providing farmers with the tools and knowledge they need to implement sustainable farming practices, the Sustainable Agriculture Initiative promotes soil health, biodiversity conservation, and responsible resource management, ultimately contributing to a more sustainable and resilient food system."
            }
    ]

    await models.Project.bulkCreate(projectModel)

    
    const teamModel = [
        {
            name: "Queen Elizabeth II",
            image:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1188052265.jpg?resize=1200:*",
            education: "Born with a reserved spot at Cambridge University, Queen Elizabeth II graduated during the Second World War. She got her Bachelor's Degree in Colonizing with honours.",
            job_experience:'Queen, Founder and CEO of Ivy Ventures',
            main_expertise:"Being a CEO",
            projects_supervised: "None",
            projects_id:"None",
            role:"CEO"
        },
        {
            name: "Emily Johnson",
            image: "https://media.licdn.com/dms/image/D5603AQHqMF68Wurang/profile-displayphoto-shrink_800_800/0/1664888408907?e=2147483647&v=beta&t=EHWkbADvfeXTDrbNbB_tnZkmY-U44UlmcwDUCdw28Sw",
            education: "Emily holds a Master's degree in Business Administration from Stanford University, specializing in Finance.",
            job_experience:"Emily brings a wealth of experience to Ivy Ventures. Prior to joining the firm, she worked as an Investment Analyst at a renowned investment firm, where she played a crucial role in evaluating potential investment opportunities. Her responsibilities included conducting comprehensive due diligence, performing financial modeling and analysis, and researching market trends. Emily's attention to detail and analytical skills enabled her to identify promising investments in various industries.",
            main_expertise:"Emily's expertise lies in the intersection of venture capital and the environment. She has a deep understanding of renewable energy, clean technology, and green infrastructure projects. Emily closely monitors the latest developments in sustainability and identifies startups that have the potential to make a significant environmental impact while delivering strong financial returns.",
            projects_supervised:'Clean Air Technologies,CleanEnergy Innovations',
            projects_id:"9,12",
            role:"Investment Analyst"
        },
        {
            name: "Andrew Lee",
            image:"https://images.squarespace-cdn.com/content/v1/5cff9a17d09a1400017de473/1560258640331-3RAEJH0ELYNADERTW3VF/Andrew+Lee+Professional+Headshot+Photo",
            education: "Andrew completed his Bachelor's degree in Economics from Harvard University, followed by an MBA from Wharton School of the University of Pennsylvania.",
            job_experience:"Andrew's prior experience in the field of venture capital has honed his skills in investment analysis and strategic decision-making. He spent several years as a Management Consultant at a top-tier consulting firm, where he advised clients on strategic investments and business development initiatives. Andrew excelled in conducting in-depth market research, analyzing financial data, and developing growth strategies for businesses across various sectors. His experience provided him with a comprehensive understanding of the due diligence process and the critical factors that drive successful investment outcomes.",
            main_expertise:"Andrew's main area of expertise lies in the means of transportation sector. He has a keen interest in emerging technologies such as electric vehicles, autonomous transportation systems, and sustainable logistics. Andrew closely follows industry trends and market dynamics to identify startups that are disrupting traditional transportation models and have the potential to shape the future of mobility.",
            projects_supervised: "NanoPort,MaglevTech",
            projects_id:"10,11",
            role:"Investment Manager"
        },
        {
            name: "Sarah Thompson",
            image:"https://media.licdn.com/dms/image/C5603AQF6wEa94tHuLQ/profile-displayphoto-shrink_800_800/0/1653686039780?e=2147483647&v=beta&t=7Lc2Max9N-dOgU_J4jnqmlca7Z8C1k6i0kUzvIae0p8",
            education: "Sarah holds a Bachelor's degree in Biomedical Engineering from MIT, with a minor in Business Management.",
            job_experience:"Sarah's journey in the venture capital industry began after gaining valuable experience as a Research Scientist at a leading pharmaceutical company. During her time there, she contributed to the development of innovative medical devices and drug delivery systems, leveraging her technical expertise in biomedical engineering. Additionally, Sarah gained experience in project management, collaborating with cross-functional teams and overseeing the successful execution of projects. Her role also involved conducting intellectual property evaluations and assessing the commercial potential of scientific discoveries.",
            main_expertise:"Sarah's primary area of expertise is health. She combines her technical background in biomedical engineering with a deep understanding of the healthcare industry to evaluate investment opportunities in areas such as digital health, medical technology, and biotechnology. Sarah is particularly passionate about leveraging technology to improve patient care and wellness, and she actively seeks out startups that are revolutionizing healthcare delivery and driving positive outcomes.",
            projects_supervised:"MedTech Innovations",
            projects_id:"3",
            role:"Portfolio Manager"
        },
        {
            name: "Michael Chen",
            image:"https://media.licdn.com/dms/image/C5603AQGxjYU-qg21Eg/profile-displayphoto-shrink_800_800/0/1522118947763?e=2147483647&v=beta&t=8x_EJezY9ndtBXsTtbCvj2hpxtqbuL0zXRQcdzEb8Zg",
            education: "Michael graduated from Stanford University with a Bachelor's degree in Computer Science and a minor in Business Administration.",
            job_experience:"Michael's journey in venture capital began after gaining significant experience as a Software Engineer at a prominent technology company. In this role, he specialized in developing scalable software solutions, leveraging data analytics for business optimization, and collaborating with cross-functional teams to deliver high-quality products. Michael's experience equipped him with a solid foundation in problem-solving, critical thinking, and project management.",
            main_expertise:"Michael's main area of expertise is at the intersection of technology and venture capital. His strong technical skills, coupled with his understanding of emerging technologies such as artificial intelligence, blockchain, and cybersecurity, make him adept at identifying investment opportunities in the tech sector. Michael closely monitors the technological landscape and seeks out startups that have the potential to disrupt industries and create transformative solutions.",
            projects_supervised:"SmartCity Solutions",
            projects_id:"7",
            role:"CFO"
        },
        {
            name: "Lauren Miller",
            image:"https://media.licdn.com/dms/image/D4E03AQEJXiP7yTBH5g/profile-displayphoto-shrink_800_800/0/1674008445370?e=2147483647&v=beta&t=86PdQMoakkDpX2nBQwmVPfZ7FxmtMQZDkzmm2gRZoT4",
            education: "Lauren holds a Master's degree in Environmental Science from Columbia University, with a focus on sustainability and resource management.",
            job_experience:"Lauren's professional journey in sustainability began as a Sustainability Consultant, where she assisted businesses in integrating environmentally responsible practices into their operations. In this role, she conducted sustainability assessments, identified areas for improvement, and developed customized strategies to minimize environmental impact. Lauren also gained experience in conducting environmental impact assessments, helping organizations navigate regulatory requirements, and advising on sustainable supply chain management.",
            main_expertise:"Lauren specializes in environmental sustainability. Her expertise encompasses a wide range of areas, including renewable energy projects, circular economy models, sustainable supply chains, and green infrastructure. Lauren's deep knowledge of sustainable practices, coupled with her ability to identify viable investment opportunities, enables Ivy Ventures to make environmentally conscious investments that generate both positive financial returns and lasting environmental impact.",
            projects_supervised:"CleanWater Solutions,Sustainable Agriculture Initiative",
            projects_id:"4,15",
            role:"CTO"
        },
        {
            name: "David Patel",
            image:"https://image.tmdb.org/t/p/original/jt08kAMlC7s9MJ8PupHBUjY0Ruc.jpg",
            education: "David completed his Bachelor's degree in Finance from the London School of Economics and Political Science.",
            job_experience:"David's extensive experience as an Investment Banker at a global financial institution provides him with a comprehensive understanding of the investment landscape and deal execution. He played a pivotal role in advising clients on mergers and acquisitions, capital raising, and strategic transactions. David's responsibilities included conducting financial analysis, modeling complex financial structures, and negotiating deals. His experience in conducting due diligence and assessing investment opportunities equips him with the skills needed to identify ventures with strong growth potential.",
            main_expertise:"David's area of expertise lies in financial analysis and deal execution. He leverages his deep understanding of capital markets, financial modeling, and valuation techniques to evaluate investment opportunities and structure deals that align with Ivy Ventures' investment strategy. David's expertise contributes to the firm's ability to make sound investment decisions and create value for both portfolio companies and investors.",
            projects_supervised:"Sustainable Transport",
            projects_id:"13",
            role:"Office Manager"
        },
        {
            name: "Jennifer Ramirez",
            image:"https://media.licdn.com/dms/image/C4E03AQFgb4DJn7uGww/profile-displayphoto-shrink_800_800/0/1619027283046?e=2147483647&v=beta&t=85y8BCpi-0fXDwu0werG84-Xq7WcQ3j12ymMIoarSkw",
            education: "Jennifer holds a Master's degree in Public Health from Johns Hopkins University, with a specialization in health policy and management.",
            job_experience:"Jennifer's previous role as a Health Policy Analyst at a leading research institute has equipped her with a strong foundation in healthcare policy, research, and analysis. She played a crucial role in conducting policy research, analyzing healthcare trends, and providing strategic recommendations to government agencies and healthcare organizations. Jennifer's experience involved evaluating the impact of policies on public health, conducting cost-effectiveness analyses, and developing evidence-based strategies to improve health outcomes.",
            main_expertise:"Jennifer's area of expertise lies in health policy and healthcare innovation. She possesses a deep understanding of the regulatory landscape, reimbursement models, and emerging trends in the healthcare industry. Jennifer closely monitors advancements in digital health, telemedicine, and personalized medicine, identifying startups that have the potential to revolutionize healthcare delivery and improve patient outcomes. Her expertise allows Ivy Ventures to navigate the complex healthcare landscape and invest in ventures that have the potential to drive positive change.",
            projects_supervised:"HealthTech Solutions",
            projects_id:"14",
            role:" Lead Software Engineer"
        },
        {
            name: "Alex Turner",
            image:"https://media.licdn.com/dms/image/D5603AQFbMJlwuWTQ1Q/profile-displayphoto-shrink_800_800/0/1668480744091?e=1692230400&v=beta&t=8qINgtzIGPkrV897IMNb7dRqKdplFfdHnDaQuMPc78I",
            education: "Alex graduated with a Bachelor's degree in Economics from Princeton University, with a minor in Environmental Studies.",
            job_experience:"Alex's experience at a sustainable investment firm as a Senior Analyst provided him with valuable insights into impact investing and sustainable business practices. His responsibilities included conducting financial analysis, impact assessments, and due diligence for companies operating in the renewable energy and clean technology sectors. Alex actively participated in evaluating investment opportunities, identifying key ESG (environmental, social, and governance) factors, and assessing the potential for long-term sustainability and profitability.",
            main_expertise:"Alex's main area of expertise is sustainable investing. He possesses a deep understanding of impact investing frameworks, ESG considerations, and sustainable business models. Alex's expertise helps Ivy Ventures evaluate investment opportunities that align with their commitment to environmental and social responsibility. He actively seeks out ventures that demonstrate strong environmental stewardship, social impact, and financial performance, thereby contributing to a sustainable future.",
            projects_supervised:"EcoTech Solutions,GreenCommute",
            projects_id:"1,2",
            role:"Sales Manager"
        },
        {
            name: "Michelle Wong",
            image:"https://mcmillan.ca/wp-content/uploads/2021/01/Michelle-Wong_MOBILE.jpg",
            education: "Michelle holds a Bachelor's degree in Biochemistry from the University of California, Berkeley, and an MBA from INSEAD.",
            job_experience:"Michelle's journey in the biotech industry began as a Senior Analyst at a leading biotechnology company, where she conducted in-depth market research, competitive analysis, and commercialization strategies for novel therapeutics and medical devices. She collaborated with cross-functional teams to assess market demand, evaluate regulatory landscapes, and identify potential barriers to entry. Michelle's experience provided her with a comprehensive understanding of the biotech industry's complexities and the critical success factors for investment.",
            main_expertise:"Michelle's primary area of expertise lies in the biotech and healthcare sectors. Her strong scientific background, coupled with her business acumen, allows her to evaluate investment opportunities in areas such as pharmaceuticals, medical devices, diagnostics, and healthcare technology. Michelle actively seeks out startups that are developing breakthrough therapies, disruptive technologies, and innovative approaches to addressing unmet medical needs. Her expertise contributes to Ivy Ventures' ability to identify ventures with transformative potential and contribute to advancements in healthcare.",
            projects_supervised:"BioGenetics,GreenEats",
            projects_id:"5,6",
            role:"Software Engineer"
        },
        {
            name: "Jonathan Reed",
            image:"https://www.elysee.fr/cdn-cgi/image/width=760%2Cheight=1145/images/default/0001/13/22e85bb25185f2f19748178a2f46713c11a32913.jpg",
            education: "Jonathan completed his Bachelor's degree in Electrical Engineering from MIT, followed by an MBA from Harvard Business School. Fun fact, his twin brother is France's President",
            job_experience:"Jonathan's prior experience as a Product Manager at a leading technology company equipped him with a deep understanding of product development, technology commercialization, and market dynamics. In his role, he led cross-functional  in developing innovative products, defining product roadmaps, and collaborating with engineering, design, and marketing teams. Jonathan's experience involved conducting market research, gathering customer insights, and managing the product lifecycle from ideation to launch.",
            main_expertise:"Jonathan's main area of expertise lies in product development and technology commercialization. He has a keen eye for identifying market trends, understanding user needs, and translating them into successful product strategies. Jonathan actively seeks out startups that demonstrate strong product-market fit, disruptive technology, and exceptional user experience. His expertise contributes to Ivy Ventures' ability to evaluate technology-driven investment opportunities and identify ventures with high growth potential.",
            projects_supervised:"EcoFashion",
            projects_id:"8",
            role:"Accountant"
        }
    ]

    await models.Team.bulkCreate(teamModel)
    

    

const areaModel = [
        
    {
        name : "Health",
        intro : "Health is a fundamental aspect of human well-being. Advancements in medical technology and healthcare are vital for improving quality of life and addressing global health challenges.Ivy Ventures recognizes the potential for startups to drive positive change in this field. By investing in health-focused startups, Ivy Ventures aims to contribute to the advancement of healthcare.",        
        summary : "We have chosen to focus on health because we believe in the power of technology, data, and innovation to transform healthcare. By investing in HealthTech startups, telemedicine platforms, digital health solutions, and personalized medicine initiatives, we aim to enhance healthcare accessibility, efficiency, and quality. We seek out entrepreneurs who are developing groundbreaking technologies, leveraging artificial intelligence and data analytics, and creating patient-centric healthcare solutions. Our goal is to contribute to a healthcare system that is proactive, patient-centered, and capable of delivering better outcomes for individuals and communities. ",
        short_summary :"Health is a fundamental aspect of human well-being, and we believe that investing in advancements in healthcare is crucial for the betterment of society. The healthcare industry faces numerous challenges, including rising healthcare costs, inadequate access to care, and the need for personalized and preventive approaches. At Ivy Ventures, we are dedicated to supporting innovative startups and projects that revolutionize healthcare delivery and improve patient outcomes."
    },
    {
        name : "Transport",
        intro : "Transportation plays a crucial role in our modern society. However, the traditional modes of transportation come with challenges such as congestion, carbon emissions, and reliance on fossil fuels. The stakes are high as we seek to develop efficient, safe, and sustainable transportation solutions. Ivy Ventures focuses on startups that are revolutionizing means of transportation through major advancements.",
        summary : "We have chosen to focus on means of transportation because we believe in the transformative power of sustainable transportation solutions. By investing in innovative startups and projects that promote electric mobility, intelligent transportation systems, and shared transportation services, we aim to reduce emissions, improve air quality, and enhance the overall efficiency of transportation networks. Our portfolio includes startups that are developing electric vehicles, smart charging infrastructure, autonomous transportation technologies, and alternative transportation models. We work closely with entrepreneurs who share our vision of a cleaner, safer, and more accessible transportation future.",
        short_summary : "Transportation plays a crucial role in our daily lives, connecting people, goods, and ideas across the globe. However, traditional transportation systems heavily rely on fossil fuels, contributing to air pollution, carbon emissions, and traffic congestion. The need for sustainable and efficient means of transportation has never been more evident. At Ivy Ventures, we are committed to revolutionizing the transportation sector and shaping the future of mobility."
    },
    {
        name : "Ecology",
        intro : "The environment is one of the most pressing issues of our time, with challenges ranging from climate change and resource depletion to pollution and loss of biodiversity. The stakes are high as the health and well-being of our planet and future generations depend on finding sustainable solutions. Ivy Ventures recognizes the urgency to support startups in this field.",
        summary : "We have chosen to focus on the environment because we believe that environmental sustainability is key to building a prosperous and resilient future. By investing in and supporting innovative startups and projects that address environmental challenges, we aim to drive positive change and contribute to the creation of a sustainable planet. Our commitment to the environment encompasses a wide range of sectors, including renewable energy, waste management, sustainable agriculture, and green infrastructure. We seek out visionary entrepreneurs and cutting-edge technologies that have the potential to make a significant impact on environmental conservation, climate mitigation, and the transition to a circular economy.",
        short_summary : "At Ivy Ventures, we recognize the pressing challenges and stakes associated with environmental sustainability. The world is facing unprecedented environmental issues, including climate change, biodiversity loss, and resource depletion. These challenges not only pose significant risks to the planet but also affect human health, social equity, and economic stability. It is imperative that we take immediate and decisive action to protect and restore our environment."
    },
    
]
await models.Area.bulkCreate(areaModel)
    
}

