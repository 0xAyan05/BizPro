const courses = [
    {
      "name": "Maria Santos",
      "business_online_course_title": "Mastering E-commerce: From Startup to Success",
      "course_description": "Learn the ins and outs of building a successful e-commerce business from scratch. From product sourcing to digital marketing strategies, this course covers everything you need to know to thrive in the online marketplace.",
      "ratings": 5,
      "price": 1500,
      "image_url": "https://example.com/image1.jpg"
    },
    {
      "name": "Juan Dela Cruz",
      "business_online_course_title": "Digital Marketing Fundamentals for Small Businesses",
      "course_description": "Discover essential digital marketing techniques tailored specifically for small businesses. This course covers topics such as social media marketing, email marketing, and SEO to help you grow your online presence.",
      "ratings": 4,
      "price": 1000,
      "image_url": "https://example.com/image2.jpg"
    },
    {
      "name": "Lorna Reyes",
      "business_online_course_title": "Financial Management for Entrepreneurs",
      "course_description": "Gain a comprehensive understanding of financial management principles and practices crucial for entrepreneurial success. Learn how to manage budgets, analyze financial statements, and make strategic financial decisions.",
      "ratings": 5,
      "price": 1200,
      "image_url": "https://example.com/image3.jpg"
    },
    {
      "name": "Ramon Garcia",
      "business_online_course_title": "The Art of Business Negotiation",
      "course_description": "Enhance your negotiation skills and learn effective strategies for achieving win-win outcomes in business deals. This course covers negotiation techniques, tactics, and case studies to help you become a proficient negotiator.",
      "ratings": 4,
      "price": 800,
      "image_url": "https://example.com/image4.jpg"
    },
    {
      "name": "Carmen Hernandez",
      "business_online_course_title": "Leadership Essentials for Entrepreneurs",
      "course_description": "Develop crucial leadership skills necessary for leading successful entrepreneurial ventures. Learn how to inspire teams, make tough decisions, and foster a positive organizational culture.",
      "ratings": 4,
      "price": 900,
      "image_url": "https://example.com/image5.jpg"
    },
    {
      "name": "Josefina Lim",
      "business_online_course_title": "Strategic Business Planning: From Vision to Execution",
      "course_description": "Master the art of strategic planning to drive business growth and success. This course covers the process of crafting a robust business plan, setting actionable goals, and executing strategies effectively.",
      "ratings": 5,
      "price": 1300,
      "image_url": "https://example.com/image6.jpg"
    },
    {
      "name": "Ricardo Cruz",
      "business_online_course_title": "Fundamentals of Entrepreneurship",
      "course_description": "Learn the fundamental principles of entrepreneurship, including idea generation, market analysis, and business model development. Gain insights into what it takes to launch and sustain a successful business.",
      "ratings": 4,
      "price": 700,
      "image_url": "https://example.com/image7.jpg"
    },
    {
      "name": "Elena Martinez",
      "business_online_course_title": "Social Media Strategies for Business Growth",
      "course_description": "Unlock the power of social media to grow your business. This course covers advanced social media strategies, content creation, and community engagement techniques to drive brand awareness and customer engagement.",
      "ratings": 5,
      "price": 1100,
      "image_url": "https://example.com/image8.jpg"
    },
    {
      "name": "Antonio Santos",
      "business_online_course_title": "Effective Time Management for Entrepreneurs",
      "course_description": "Master the art of time management and productivity to maximize your entrepreneurial success. Learn practical techniques for prioritizing tasks, minimizing distractions, and optimizing workflow.",
      "ratings": 4,
      "price": 950,
      "image_url": "https://example.com/image9.jpg"
    },
    {
      "name": "Gloria Fernandez",
      "business_online_course_title": "Building a Successful Startup: From Idea to Launch",
      "course_description": "Navigate the journey of building a successful startup from ideation to launch. This course covers ideation techniques, market validation, product development, and launch strategies.",
      "ratings": 5,
      "price": 1400,
      "image_url": "https://example.com/image10.jpg"
    },
    {
      "name": "Romeo Gonzales",
      "business_online_course_title": "Effective Business Communication Strategies",
      "course_description": "Enhance your communication skills to effectively convey your message in a business environment. Learn techniques for verbal, written, and non-verbal communication to build rapport and influence stakeholders.",
      "ratings": 4,
      "price": 850,
      "image_url": "https://example.com/image11.jpg"
    },
    {
      "name": "Isabel Reyes",
      "business_online_course_title": "The Psychology of Selling: Persuasion Techniques for Entrepreneurs",
      "course_description": "Explore the psychology behind successful selling and learn persuasion techniques to boost your sales effectiveness. Understand consumer behavior, overcome objections, and close deals with confidence.",
      "ratings": 5,
      "price": 1200,
      "image_url": "https://example.com/image12.jpg"
    },
    {
      "name": "Rodrigo Santos",
      "business_online_course_title": "Mastering Business Analytics: Data-Driven Decision Making",
      "course_description": "Harness the power of business analytics to make informed decisions and drive business growth. Learn how to collect, analyze, and interpret data to gain valuable insights for strategic decision-making.",
      "ratings": 4,
      "price": 1000,
      "image_url": "https://example.com/image13.jpg"
    },
    {
      "name": "Luz Garcia",
      "business_online_course_title": "The Fundamentals of Financial Accounting",
      "course_description": "Gain a solid understanding of financial accounting principles essential for entrepreneurs. Learn how to prepare financial statements, interpret financial data, and make informed business decisions.",
      "ratings": 5,
      "price": 1150,
      "image_url": "https://example.com/image14.jpg"
    },
    {
      "name": "Eduardo Reyes",
      "business_online_course_title": "Building a Strong Personal Brand Online",
      "course_description": "Learn how to build a compelling personal brand online to attract opportunities and grow your business. Discover strategies for creating engaging content, optimizing profiles, and networking effectively.",
      "ratings": 4,
      "price": 900,
      "image_url": "https://example.com/image15.jpg"
    },
    {
      "name": "Cecilia Cruz",
      "business_online_course_title": "Effective Business Networking Strategies",
      "course_description": "Master the art of networking to build valuable connections and expand your business opportunities. Learn proven networking strategies, etiquette, and relationship-building techniques.",
      "ratings": 5,
      "price": 1000,
      "image_url": "https://example.com/image16.jpg"
    },
    {
      "name": "Fernando Hernandez",
      "business_online_course_title": "Entrepreneurial Mindset: Unlocking Your Potential",
      "course_description": "Cultivate an entrepreneurial mindset to unleash your full potential and drive success in business. Learn how to think creatively, embrace challenges, and seize opportunities in the entrepreneurial journey.",
      "ratings": 4,
      "price": 950,
      "image_url": "https://example.com/image17.jpg"
    },
    {
      "name": "Rosalinda Gomez",
      "business_online_course_title": "Effective Project Management for Entrepreneurs",
      "course_description": "Learn essential project management skills to effectively plan, execute, and monitor projects in your entrepreneurial ventures. Discover tools, techniques, and best practices for successful project delivery.",
      "ratings": 5,
      "price": 1100,
      "image_url": "https://example.com/image18.jpg"
    },
    {
      "name": "Alejandro Martinez",
      "business_online_course_title": "Mastering Customer Relationship Management",
      "course_description": "Discover strategies for building and maintaining strong customer relationships to drive business growth. Learn how to leverage CRM tools, personalize interactions, and deliver exceptional customer experiences.",
      "ratings": 4,
      "price": 1000,
      "image_url": "https://example.com/image19.jpg"
    },
    {
      "name": "Cristina Lopez",
      "business_online_course_title": "The Art of Business Storytelling",
      "course_description": "Learn how to craft compelling stories to engage, inspire, and persuade your audience in a business context. Explore storytelling techniques, narrative structures, and emotional resonance.",
      "ratings": 5,
      "price": 1200,
      "image_url": "https://example.com/image20.jpg"
    },
    {
        "name": "Andres Reyes",
        "business_online_course_title": "Entrepreneurial Finance: Managing Finances for Growth",
        "course_description": "Learn how to effectively manage finances to fuel the growth of your entrepreneurial venture. Explore topics such as budgeting, financial forecasting, and capital raising strategies.",
        "ratings": 4,
        "price": 1250,
        "image_url": "https://example.com/image21.jpg"
      },
      {
        "name": "Marissa Gonzales",
        "business_online_course_title": "Effective Marketing Strategies for Small Businesses",
        "course_description": "Discover proven marketing strategies tailored for small businesses to attract customers and boost sales. Learn about branding, digital marketing channels, and customer acquisition techniques.",
        "ratings": 5,
        "price": 1350,
        "image_url": "https://example.com/image22.jpg"
      },
      {
        "name": "Arnold Cruz",
        "business_online_course_title": "The Art of Entrepreneurial Innovation",
        "course_description": "Explore the principles and practices of innovation in entrepreneurship. Learn how to foster a culture of innovation, generate new ideas, and execute innovative projects to stay ahead in the market.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image23.jpg"
      },
      {
        "name": "Diana Santos",
        "business_online_course_title": "Building a Profitable Online Store",
        "course_description": "Unlock the secrets to building and scaling a profitable online store. From product selection to conversion optimization, this course covers essential strategies for e-commerce success.",
        "ratings": 5,
        "price": 1400,
        "image_url": "https://example.com/image24.jpg"
      },
      {
        "name": "Pedro Hernandez",
        "business_online_course_title": "Effective Team Management for Entrepreneurs",
        "course_description": "Learn how to build and lead high-performing teams in your entrepreneurial venture. Explore team dynamics, communication strategies, and conflict resolution techniques.",
        "ratings": 4,
        "price": 950,
        "image_url": "https://example.com/image25.jpg"
      },
      {
        "name": "Anna Dela Cruz",
        "business_online_course_title": "Strategic Pricing Strategies for Business Growth",
        "course_description": "Discover how to develop strategic pricing strategies to drive business growth and profitability. Learn about pricing models, value-based pricing, and pricing optimization techniques.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image26.jpg"
      },
      {
        "name": "Martin Reyes",
        "business_online_course_title": "The Lean Startup Methodology",
        "course_description": "Master the principles of the lean startup methodology to build and grow your business efficiently. Learn how to validate ideas, iterate quickly, and minimize waste in the startup process.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image27.jpg"
      },
      {
        "name": "Lucia Gomez",
        "business_online_course_title": "Effective Customer Service Strategies",
        "course_description": "Discover strategies for delivering exceptional customer service to build loyalty and drive business success. Learn how to handle customer inquiries, resolve complaints, and create positive customer experiences.",
        "ratings": 5,
        "price": 1150,
        "image_url": "https://example.com/image28.jpg"
      },
      {
        "name": "Francisco Hernandez",
        "business_online_course_title": "The Fundamentals of Business Law for Entrepreneurs",
        "course_description": "Gain a foundational understanding of business law essentials relevant to entrepreneurs. Learn about contracts, intellectual property, liability, and legal compliance.",
        "ratings": 4,
        "price": 900,
        "image_url": "https://example.com/image29.jpg"
      },
      {
        "name": "Gabriela Garcia",
        "business_online_course_title": "Digital Transformation for Small Businesses",
        "course_description": "Learn how to embrace digital transformation to stay competitive and drive growth in your small business. Explore digital technologies, implementation strategies, and change management.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image30.jpg"
      },
      {
        "name": "Manuel Santos",
        "business_online_course_title": "Effective Brand Building Strategies",
        "course_description": "Discover how to build a strong brand that resonates with your target audience and sets you apart from the competition. Learn branding fundamentals, brand identity development, and brand management.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image31.jpg"
      },
      {
        "name": "Carolina Cruz",
        "business_online_course_title": "The Power of Emotional Intelligence in Leadership",
        "course_description": "Develop your emotional intelligence to become a more effective leader in your entrepreneurial journey. Learn how to understand and manage emotions, build strong relationships, and inspire others.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image32.jpg"
      },
      {
        "name": "Roberto Dela Cruz",
        "business_online_course_title": "Strategies for Scaling Your Business",
        "course_description": "Explore strategies and tactics for scaling your business sustainably. Learn about expansion models, operational scalability, and organizational growth strategies.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image33.jpg"
      },
      {
        "name": "Teresa Garcia",
        "business_online_course_title": "The Art of Product Management",
        "course_description": "Master the principles and practices of product management to develop and launch successful products. Learn about product lifecycle, market research, and product roadmapping.",
        "ratings": 5,
        "price": 1350,
        "image_url": "https://example.com/image34.jpg"
      },
      {
        "name": "Santiago Hernandez",
        "business_online_course_title": "Effective Business Networking Strategies",
        "course_description": "Master the art of networking to build valuable connections and expand your business opportunities. Learn proven networking strategies, etiquette, and relationship-building techniques.",
        "ratings": 4,
        "price": 950,
        "image_url": "https://example.com/image35.jpg"
      },
      {
        "name": "Marisol Dela Cruz",
        "business_online_course_title": "The Science of Decision Making in Business",
        "course_description": "Explore the cognitive processes behind effective decision making in business. Learn decision-making frameworks, risk analysis techniques, and strategies for making informed choices.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image36.jpg"
      },
      {
        "name": "Fernando Lopez",
        "business_online_course_title": "Strategic Business Planning for Growth",
        "course_description": "Develop a strategic business plan to drive growth and success in your entrepreneurial venture. Learn how to set goals, identify opportunities, and allocate resources effectively.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image37.jpg"
      },
      {
        "name": "Luisa Gomez",
        "business_online_course_title": "The Art of Negotiation for Entrepreneurs",
        "course_description": "Enhance your negotiation skills to achieve favorable outcomes in business deals. Learn negotiation strategies, tactics, and techniques for maximizing value and building win-win relationships.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image38.jpg"
      },
      {
        "name": "Rafael Hernandez",
        "business_online_course_title": "Effective Risk Management for Entrepreneurs",
        "course_description": "Learn how to identify, assess, and mitigate risks in your entrepreneurial venture. Explore risk management frameworks, techniques, and best practices to protect your business.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image39.jpg"
      },
      {
        "name": "Adriana Santos",
        "business_online_course_title": "The Art of Strategic Leadership",
        "course_description": "Develop the strategic leadership skills needed to drive success in your entrepreneurial endeavors. Learn how to formulate vision, inspire teams, and navigate complex business challenges.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image40.jpg"
      },
      {
        "name": "Marcelo Cruz",
        "business_online_course_title": "The Ultimate Guide to Social Media Marketing",
        "course_description": "Learn advanced strategies and tactics to leverage social media for business growth. Discover how to create engaging content, optimize ad campaigns, and measure ROI for social media marketing.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image41.jpg"
      },
      {
        "name": "Rosa Gonzales",
        "business_online_course_title": "Financial Planning for Entrepreneurs",
        "course_description": "Gain practical insights into financial planning strategies tailored for entrepreneurs. Learn how to set financial goals, manage cash flow, and plan for long-term financial success.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image42.jpg"
      },
      {
        "name": "Felipe Santos",
        "business_online_course_title": "The Art of Effective Decision Making",
        "course_description": "Master the art of making effective decisions in business. Learn decision-making frameworks, analytical techniques, and strategies for evaluating alternatives.",
        "ratings": 4,
        "price": 950,
        "image_url": "https://example.com/image43.jpg"
      },
      {
        "name": "Isabella Hernandez",
        "business_online_course_title": "Building a Strong Company Culture",
        "course_description": "Discover how to create a positive and thriving company culture that fosters employee engagement and productivity. Learn strategies for building trust, communication, and teamwork.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image44.jpg"
      },
      {
        "name": "Diego Martinez",
        "business_online_course_title": "The Essentials of Entrepreneurial Leadership",
        "course_description": "Develop essential leadership skills to lead and inspire teams in your entrepreneurial venture. Learn about leadership styles, motivation techniques, and effective team management.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image45.jpg"
      },
      {
        "name": "Gabriela Hernandez",
        "business_online_course_title": "Effective Time Management Strategies",
        "course_description": "Learn practical time management strategies to increase productivity and achieve your entrepreneurial goals. Discover techniques for prioritization, delegation, and overcoming procrastination.",
        "ratings": 5,
        "price": 1150,
        "image_url": "https://example.com/image46.jpg"
      },
      {
        "name": "Javier Cruz",
        "business_online_course_title": "The Art of Public Speaking for Entrepreneurs",
        "course_description": "Enhance your public speaking skills to effectively communicate your ideas and inspire audiences. Learn techniques for overcoming stage fright, structuring presentations, and engaging listeners.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image47.jpg"
      },
      {
        "name": "Alicia Santos",
        "business_online_course_title": "Strategies for Building a Global Brand",
        "course_description": "Discover strategies for expanding your brand presence globally and reaching new markets. Learn about international marketing, localization, and cultural adaptation.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image48.jpg"
      },
      {
        "name": "Fernanda Lopez",
        "business_online_course_title": "The Power of Mindset in Entrepreneurship",
        "course_description": "Cultivate a growth mindset to overcome challenges and achieve success in entrepreneurship. Learn how to embrace failure, stay resilient, and maintain a positive outlook.",
        "ratings": 4,
        "price": 975,
        "image_url": "https://example.com/image49.jpg"
      },
      {
        "name": "Carlos Gomez",
        "business_online_course_title": "Effective Marketing Analytics",
        "course_description": "Unlock the power of marketing analytics to measure and optimize your marketing efforts. Learn how to analyze data, track key metrics, and make data-driven marketing decisions.",
        "ratings": 5,
        "price": 1350,
        "image_url": "https://example.com/image50.jpg"
      },
      {
        "name": "Elena Cruz",
        "business_online_course_title": "The Fundamentals of Project Management",
        "course_description": "Gain a comprehensive understanding of project management fundamentals essential for entrepreneurs. Learn about project planning, scheduling, budgeting, and risk management.",
        "ratings": 4,
        "price": 975,
        "image_url": "https://example.com/image51.jpg"
      },
      {
        "name": "Raul Hernandez",
        "business_online_course_title": "Effective Business Communication Skills",
        "course_description": "Enhance your business communication skills to convey your message clearly and persuasively. Learn about verbal and written communication techniques, active listening, and professional etiquette.",
        "ratings": 5,
        "price": 1150,
        "image_url": "https://example.com/image52.jpg"
      },
      {
        "name": "Marina Santos",
        "business_online_course_title": "The Art of Customer Retention",
        "course_description": "Discover strategies for retaining customers and building long-term relationships. Learn about customer loyalty programs, personalized marketing, and proactive customer service.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image53.jpg"
      },
      {
        "name": "Hector Cruz",
        "business_online_course_title": "Strategic Product Development",
        "course_description": "Learn how to develop and launch successful products that meet market needs and drive business growth. Explore product lifecycle management, market research, and innovation.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image54.jpg"
      },
      {
        "name": "Lucas Hernandez",
        "business_online_course_title": "The Art of Customer Feedback Management",
        "course_description": "Discover strategies for collecting, analyzing, and acting on customer feedback to improve your products and services. Learn about feedback channels, survey design, and sentiment analysis.",
        "ratings": 4,
        "price": 975,
        "image_url": "https://example.com/image55.jpg"
      },
      {
        "name": "Rita Garcia",
        "business_online_course_title": "Building a Sustainable Business Model",
        "course_description": "Explore sustainable business models that create long-term value for both the company and society. Learn about triple bottom line, circular economy, and social entrepreneurship.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image56.jpg"
      },
      {
        "name": "Pablo Dela Cruz",
        "business_online_course_title": "The Art of Delegation for Entrepreneurs",
        "course_description": "Master the art of delegation to empower your team and focus on high-impact tasks. Learn how to delegate effectively, set clear expectations, and provide feedback.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image57.jpg"
      },
      {
        "name": "Lourdes Martinez",
        "business_online_course_title": "Strategies for Building a Resilient Business",
        "course_description": "Discover strategies for building resilience in your business to weather challenges and thrive in uncertain times. Learn about risk management, contingency planning, and adaptability.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image58.jpg"
      },
      {
        "name": "Enrique Gomez",
        "business_online_course_title": "The Power of Networking in Entrepreneurship",
        "course_description": "Learn how to leverage networking to create opportunities and grow your entrepreneurial venture. Discover networking strategies, relationship-building techniques, and tips for effective networking events.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image59.jpg"
      },
      {
        "name": "Antonia Hernandez",
        "business_online_course_title": "The Essentials of Business Strategy",
        "course_description": "Gain a deep understanding of business strategy fundamentals essential for entrepreneurial success. Learn about strategic analysis, competitive advantage, and strategic planning frameworks.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image60.jpg"
      },
      {
        "name": "Isidro Cruz",
        "business_online_course_title": "Effective Business Negotiation Strategies",
        "course_description": "Master the art of negotiation to achieve favorable outcomes in business deals. Learn negotiation tactics, strategies, and techniques to build mutually beneficial agreements.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image61.jpg"
      },
      {
        "name": "Amelia Hernandez",
        "business_online_course_title": "The Essentials of Business Ethics",
        "course_description": "Gain a deep understanding of business ethics principles and practices essential for entrepreneurial success. Learn about ethical decision-making, corporate social responsibility, and ethical leadership.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image62.jpg"
      },
      {
        "name": "Diego Garcia",
        "business_online_course_title": "The Power of Emotional Intelligence in Entrepreneurship",
        "course_description": "Develop your emotional intelligence to navigate the challenges of entrepreneurship with resilience and adaptability. Learn how to manage stress, build relationships, and make sound decisions under pressure.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image63.jpg"
      },
      {
        "name": "Sofia Cruz",
        "business_online_course_title": "Building a Strong Personal Brand",
        "course_description": "Learn how to build a compelling personal brand that reflects your values, expertise, and unique identity. Discover strategies for branding, content creation, and online presence.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image64.jpg"
      },
      {
        "name": "Manuel Garcia",
        "business_online_course_title": "The Fundamentals of Market Research",
        "course_description": "Gain essential skills in market research to understand customer needs, identify opportunities, and make informed business decisions. Learn about research methods, data analysis, and interpretation.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image65.jpg"
      },
      {
        "name": "Ana Dela Cruz",
        "business_online_course_title": "Strategic Leadership in Times of Crisis",
        "course_description": "Develop strategic leadership skills to navigate and lead your business through times of crisis and uncertainty. Learn crisis management strategies, communication techniques, and decision-making under pressure.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image66.jpg"
      },
      {
        "name": "Francisca Hernandez",
        "business_online_course_title": "The Art of Influencing and Persuasion",
        "course_description": "Master the art of influencing and persuasion to effectively communicate your ideas and drive action in business settings. Learn persuasion techniques, communication strategies, and psychological principles.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image67.jpg"
      },
      {
        "name": "Antonio Garcia",
        "business_online_course_title": "Effective Supply Chain Management for Entrepreneurs",
        "course_description": "Learn how to optimize your supply chain to improve efficiency, reduce costs, and enhance customer satisfaction. Discover supply chain strategies, logistics management, and inventory control techniques.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image68.jpg"
      },
      {
        "name": "Luz Dela Cruz",
        "business_online_course_title": "The Art of Innovation in Business",
        "course_description": "Unlock the power of innovation to drive growth and success in your entrepreneurial ventures. Learn how to foster a culture of innovation, generate new ideas, and implement innovative solutions.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image69.jpg"
      },
      {
        "name": "Felipe Hernandez",
        "business_online_course_title": "Financial Management for Small Businesses",
        "course_description": "Gain practical insights into financial management strategies tailored for small businesses. Learn about budgeting, cash flow management, and financial decision-making.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image70.jpg"
      },
      {
        "name": "Maria Dela Cruz",
        "business_online_course_title": "Digital Marketing Fundamentals",
        "course_description": "Discover the fundamentals of digital marketing to promote your business online effectively. Learn about SEO, social media marketing, email marketing, and online advertising.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image71.jpg"
      },
      {
        "name": "Ricardo Gomez",
        "business_online_course_title": "The Essentials of Entrepreneurship",
        "course_description": "Gain a comprehensive understanding of entrepreneurship fundamentals essential for starting and growing your business. Learn about idea generation, business planning, and startup financing.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image72.jpg"
      },
      {
        "name": "Elena Hernandez",
        "business_online_course_title": "Effective Project Management for Entrepreneurs",
        "course_description": "Learn essential project management skills to successfully plan, execute, and deliver projects in your entrepreneurial ventures. Discover project planning, scheduling, and risk management techniques.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image73.jpg"
      },
      {
        "name": "Carlos Dela Cruz",
        "business_online_course_title": "Strategic Business Planning",
        "course_description": "Develop a strategic business plan to guide your entrepreneurial venture towards success. Learn about goal setting, market analysis, and strategic decision-making.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image74.jpg"
      },
      {
        "name": "Luis Hernandez",
        "business_online_course_title": "The Art of Leadership",
        "course_description": "Master the art of leadership to inspire and motivate teams in your entrepreneurial journey. Learn about leadership styles, communication techniques, and team-building strategies.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image75.jpg"
      },
      {
        "name": "Victoria Cruz",
        "business_online_course_title": "Effective Business Communication",
        "course_description": "Enhance your business communication skills to convey your message clearly and persuasively. Learn about verbal and written communication, active listening, and professional etiquette.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image76.jpg"
      },
      {
        "name": "Jorge Garcia",
        "business_online_course_title": "The Science of Decision Making",
        "course_description": "Explore the science behind decision making and learn how to make better decisions in business. Discover decision-making biases, cognitive processes, and strategies for improving decision quality.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image77.jpg"
      },
      {
        "name": "Isabel Hernandez",
        "business_online_course_title": "Strategies for Business Growth",
        "course_description": "Discover strategies and tactics for driving business growth and expansion. Learn about market penetration, product development, and diversification strategies.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image78.jpg"
      },
      {
        "name": "Mateo Gomez",
        "business_online_course_title": "The Power of Networking",
        "course_description": "Learn how to leverage the power of networking to create opportunities and grow your business. Discover networking strategies, relationship-building techniques, and effective networking etiquette.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image79.jpg"
      },
      {
        "name": "Julia Dela Cruz",
        "business_online_course_title": "Financial Literacy for Entrepreneurs",
        "course_description": "Gain essential financial literacy skills to manage your business finances effectively. Learn about budgeting, financial statements, and investment strategies.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image80.jpg"
      },
      {
        "name": "Alejandra Hernandez",
        "business_online_course_title": "The Art of Strategic Planning",
        "course_description": "Master the art of strategic planning to set clear goals and direction for your entrepreneurial venture. Learn about environmental analysis, goal setting, and implementation strategies.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image81.jpg"
      },
      {
        "name": "Javier Gomez",
        "business_online_course_title": "Building a High-Performance Team",
        "course_description": "Learn how to build and lead high-performing teams in your entrepreneurial venture. Discover team dynamics, communication strategies, and performance management techniques.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image82.jpg"
      },
      {
        "name": "Camila Dela Cruz",
        "business_online_course_title": "The Essentials of Digital Entrepreneurship",
        "course_description": "Gain a comprehensive understanding of digital entrepreneurship and learn how to start and grow an online business. Explore e-commerce, digital marketing, and online monetization strategies.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image83.jpg"
      },
      {
        "name": "Gonzalo Garcia",
        "business_online_course_title": "Effective Leadership Communication",
        "course_description": "Enhance your leadership communication skills to inspire and motivate teams in your entrepreneurial journey. Learn about effective messaging, storytelling, and communication strategies.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image84.jpg"
      },
      {
        "name": "Martina Hernandez",
        "business_online_course_title": "The Art of Digital Marketing Strategy",
        "course_description": "Develop a comprehensive digital marketing strategy to reach and engage your target audience effectively. Learn about content marketing, social media strategy, and performance measurement.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image85.jpg"
      },
      {
        "name": "Diego Dela Cruz",
        "business_online_course_title": "Financial Management for Entrepreneurs",
        "course_description": "Gain practical insights into financial management strategies tailored for entrepreneurs. Learn about budgeting, cash flow management, and financial decision-making.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image86.jpg"
      },
      {
        "name": "Sara Gomez",
        "business_online_course_title": "The Art of Productivity",
        "course_description": "Unlock the secrets to maximizing productivity and achieving your entrepreneurial goals. Learn time management techniques, prioritization strategies, and productivity tools.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image87.jpg"
      },
      {
        "name": "Hugo Hernandez",
        "business_online_course_title": "Strategic Brand Management",
        "course_description": "Discover strategies for building and managing a strong brand that resonates with your target audience. Learn about brand positioning, brand identity, and brand equity.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image88.jpg"
      },
      {
        "name": "Daniela Dela Cruz",
        "business_online_course_title": "The Art of Customer Experience Management",
        "course_description": "Learn how to create memorable and meaningful customer experiences to drive loyalty and advocacy. Explore customer journey mapping, service design, and customer feedback management.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image89.jpg"
      },
      {
        "name": "Pedro Gomez",
        "business_online_course_title": "Effective Project Management for Small Businesses",
        "course_description": "Learn essential project management skills tailored for small businesses to successfully plan, execute, and deliver projects. Discover project planning, scheduling, and resource allocation.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image90.jpg"
      },
      {
        "name": "Carla Hernandez",
        "business_online_course_title": "The Essentials of Entrepreneurial Finance",
        "course_description": "Gain a solid understanding of entrepreneurial finance to effectively manage finances and drive business growth. Learn about financial statements, cash flow management, and funding options.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image91.jpg"
      },
      {
        "name": "Arturo Gomez",
        "business_online_course_title": "The Power of Social Entrepreneurship",
        "course_description": "Discover how to create positive social impact while building a successful business. Learn about social entrepreneurship models, impact measurement, and sustainable business practices.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image92.jpg"
      },
      {
        "name": "Valeria Dela Cruz",
        "business_online_course_title": "The Art of Strategic Innovation",
        "course_description": "Explore strategies and techniques for fostering innovation and driving business growth. Learn how to cultivate a culture of innovation, generate ideas, and implement innovative solutions.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image93.jpg"
      },
      {
        "name": "Ramon Hernandez",
        "business_online_course_title": "The Essentials of Business Development",
        "course_description": "Gain a comprehensive understanding of business development fundamentals essential for entrepreneurial success. Learn about market analysis, strategic partnerships, and growth strategies.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image94.jpg"
      },
      {
        "name": "Carmen Gomez",
        "business_online_course_title": "The Art of Digital Transformation",
        "course_description": "Learn how to leverage digital technologies to transform your business and stay competitive in the digital age. Explore digital transformation strategies, implementation challenges, and success factors.",
        "ratings": 4,
        "price": 1050,
        "image_url": "https://example.com/image95.jpg"
      },
      {
        "name": "Francisco Dela Cruz",
        "business_online_course_title": "Effective Sales Strategies for Entrepreneurs",
        "course_description": "Discover proven sales strategies and techniques to drive revenue and growth in your entrepreneurial venture. Learn about prospecting, lead generation, and closing techniques.",
        "ratings": 5,
        "price": 1200,
        "image_url": "https://example.com/image96.jpg"
      },
      {
        "name": "Laura Hernandez",
        "business_online_course_title": "The Art of Strategic Marketing",
        "course_description": "Develop a strategic marketing plan to reach and engage your target audience effectively. Learn about market segmentation, positioning, and marketing mix strategies.",
        "ratings": 4,
        "price": 1000,
        "image_url": "https://example.com/image97.jpg"
      },
      {
        "name": "Diego Gomez",
        "business_online_course_title": "Building a Culture of Innovation",
        "course_description": "Learn how to foster a culture of innovation that drives creativity, growth, and success in your entrepreneurial venture. Discover innovation frameworks, idea generation techniques, and implementation strategies.",
        "ratings": 5,
        "price": 1300,
        "image_url": "https://example.com/image98.jpg"
      },
      {
        "name": "Ana Hernandez",
        "business_online_course_title": "The Essentials of Strategic Management",
        "course_description": "Gain a deep understanding of strategic management principles and practices essential for entrepreneurial success. Learn about strategic analysis, formulation, and implementation.",
        "ratings": 4,
        "price": 1100,
        "image_url": "https://example.com/image99.jpg"
      },
      {
        "name": "Manuel Dela Cruz",
        "business_online_course_title": "The Art of Entrepreneurial Leadership",
        "course_description": "Master the art of entrepreneurial leadership to inspire and motivate teams in your entrepreneurial journey. Learn about leadership styles, decision-making, and team empowerment.",
        "ratings": 5,
        "price": 1250,
        "image_url": "https://example.com/image100.jpg"
      }
  ]

  
module.exports = courses