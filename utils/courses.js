const courses = [
    {
        "name": "Maria Santos",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Mastering E-commerce Strategies",
        "courseDescription": "Learn advanced techniques for optimizing your e-commerce business and increasing sales.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/maria_santos.jpg"
      },
      {
        "name": "Juan Dela Cruz",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Digital Marketing Tactics",
        "courseDescription": "Discover proven digital marketing strategies to boost your online presence and attract more customers.",
        "ratings": 4,
        "price": 1000,
        "imageUrl": "https://example.com/juan_dela_cruz.jpg"
      },
      {
        "name": "Lorna Reyes",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Finance Fundamentals for Entrepreneurs",
        "courseDescription": "Gain essential financial management skills to effectively run your business and make informed decisions.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/lorna_reyes.jpg"
      },
      {
        "name": "Miguel Garcia",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Business Planning",
        "courseDescription": "Learn how to develop and implement effective business plans to achieve your company's goals.",
        "ratings": 4,
        "price": 800,
        "imageUrl": "https://example.com/miguel_garcia.jpg"
      },
      {
        "name": "Ana Santiago",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Social Media Marketing Mastery",
        "courseDescription": "Unlock the power of social media to grow your brand and engage with your target audience effectively.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/ana_santiago.jpg"
      },
      {
        "name": "Pedro Martinez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Leadership Essentials for Business Owners",
        "courseDescription": "Develop crucial leadership skills to inspire and lead your team towards success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/pedro_martinez.jpg"
      },
      {
        "name": "Carmen Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Customer Service Strategies",
        "courseDescription": "Learn how to deliver exceptional customer service to enhance customer satisfaction and loyalty.",
        "ratings": 4,
        "price": 900,
        "imageUrl": "https://example.com/carmen_hernandez.jpg"
      },
      {
        "name": "Ramon Santos",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Successful Business Negotiation Techniques",
        "courseDescription": "Master the art of negotiation to secure favorable deals and agreements for your business.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/ramon_santos.jpg"
      },
      {
        "name": "Lea Cruz",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Time Management for Entrepreneurs",
        "courseDescription": "Learn practical time management techniques to increase productivity and achieve work-life balance.",
        "ratings": 4,
        "price": 700,
        "imageUrl": "https://example.com/lea_cruz.jpg"
      },
      {
        "name": "Antonio Reyes",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Essentials of Business Networking",
        "courseDescription": "Discover effective networking strategies to expand your professional connections and grow your business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/antonio_reyes.jpg"
      },
      {
        "name": "Elena Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Planning for Small Business Owners",
        "courseDescription": "Learn how to create and implement a comprehensive financial plan to ensure the success of your small business.",
        "ratings": 5,
        "price": 1300,
        "imageUrl": "https://example.com/elena_gomez.jpg"
      },
      {
        "name": "Josefina Rivera",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Business Communication Skills",
        "courseDescription": "Enhance your communication skills to convey your message clearly and effectively in a business setting.",
        "ratings": 4,
        "price": 1000,
        "imageUrl": "https://example.com/josefina_rivera.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Innovative Product Development Strategies",
        "courseDescription": "Learn creative approaches to product development that will set your business apart from the competition.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Isabel Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Essentials of Business Law",
        "courseDescription": "Gain a comprehensive understanding of business law to protect your company's interests and mitigate legal risks.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/isabel_ramirez.jpg"
      },
      {
        "name": "Fernando Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Pricing Strategies",
        "courseDescription": "Learn how to set prices strategically to maximize profits and maintain competitiveness in the market.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/fernando_lopez.jpg"
      },
      {
        "name": "Cristina Garcia",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Branding Strategies",
        "courseDescription": "Discover proven branding strategies to build a strong and memorable brand identity for your business.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/cristina_garcia.jpg"
      },
      {
        "name": "Marcelo Santos",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Mindset Mastery",
        "courseDescription": "Cultivate the mindset of a successful entrepreneur and overcome challenges to achieve your business goals.",
        "ratings": 4,
        "price": 900,
        "imageUrl": "https://example.com/marcelo_santos.jpg"
      },
      {
        "name": "Patricia Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Sales Strategies",
        "courseDescription": "Learn powerful sales techniques to close deals and drive revenue for your business.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/patricia_fernandez.jpg"
      },
      {
        "name": "Rodrigo Cruz",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Growth Strategies",
        "courseDescription": "Explore strategies for sustainable business growth and expansion in competitive markets.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/rodrigo_cruz.jpg"
      },
      {
        "name": "Elena Martinez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Management for Small Businesses",
        "courseDescription": "Learn essential financial management skills to effectively manage finances and drive profitability in your small business.",
        "ratings": 4,
        "price": 1000,
        "imageUrl": "https://example.com/elena_martinez.jpg"
      },
      {
        "name": "Ricardo Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Development",
        "courseDescription": "Discover the key strategies and tactics to drive sustainable business growth and expansion.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/ricardo_fernandez.jpg"
      },
      {
        "name": "Monica Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Entrepreneurship Essentials",
        "courseDescription": "Learn how to launch and scale a successful digital business from scratch, even with limited resources.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/monica_lopez.jpg"
      },
      {
        "name": "Gabriel Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Project Management for Entrepreneurs",
        "courseDescription": "Master the fundamentals of project management to ensure the successful execution of your business initiatives.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/gabriel_ramirez.jpg"
      },
      {
        "name": "Sofia Martinez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Literacy for Business Owners",
        "courseDescription": "Acquire essential financial knowledge and skills to manage your business finances with confidence.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/sofia_martinez.jpg"
      },
      {
        "name": "Diego Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Entrepreneurial Leadership",
        "courseDescription": "Develop the leadership qualities necessary to inspire and lead your team towards business success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/diego_hernandez.jpg"
      },
      {
        "name": "Luisa Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Market Research Strategies",
        "courseDescription": "Learn how to conduct market research effectively to identify opportunities and make informed business decisions.",
        "ratings": 4,
        "price": 1000,
        "imageUrl": "https://example.com/luisa_gomez.jpg"
      },
      {
        "name": "Andres Cruz",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Innovative Business Strategies",
        "courseDescription": "Explore innovative approaches to business strategy that will position your company for long-term success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/andres_cruz.jpg"
      },
      {
        "name": "Carolina Rivera",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Essentials of Product Management",
        "courseDescription": "Gain a comprehensive understanding of product management principles and best practices.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/carolina_rivera.jpg"
      },
      {
        "name": "Fernando Rodriguez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Analytics",
        "courseDescription": "Harness the power of data analytics to drive strategic decision-making and optimize business performance.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/fernando_rodriguez.jpg"
      },
      {
        "name": "Isabella Perez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Building a Successful Online Brand",
        "courseDescription": "Learn how to build and grow a powerful online brand that resonates with your target audience.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/isabella_perez.jpg"
      },
      {
        "name": "Antonio Garcia",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Negotiation",
        "courseDescription": "Master the art of negotiation to achieve favorable outcomes in business deals and partnerships.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/antonio_garcia.jpg"
      },
      {
        "name": "Camila Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Finance",
        "courseDescription": "Learn the financial management skills necessary to effectively manage finances and drive business growth.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/camila_hernandez.jpg"
      },
      {
        "name": "Alejandro Torres",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Marketing Planning",
        "courseDescription": "Develop a comprehensive marketing plan that aligns with your business goals and drives results.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/alejandro_torres.jpg"
      },
      {
        "name": "Valeria Ruiz",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Business Leadership",
        "courseDescription": "Enhance your leadership skills to inspire and motivate your team towards achieving business success.",
        "ratings": 4,
        "price": 1000,
        "imageUrl": "https://example.com/valeria_ruiz.jpg"
      },
      {
        "name": "Felipe Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Planning for Entrepreneurs",
        "courseDescription": "Learn how to create a comprehensive financial plan to support the growth and sustainability of your business.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/felipe_gomez.jpg"
      },
      {
        "name": "Gabriela Diaz",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Social Media Strategy for Business",
        "courseDescription": "Develop a winning social media strategy to effectively engage your audience and drive business growth.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/gabriela_diaz.jpg"
      },
      {
        "name": "Hector Sanchez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Innovative Business Development",
        "courseDescription": "Explore innovative approaches to business development that drive sustainable growth and success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/hector_sanchez.jpg"
      },
      {
        "name": "Adriana Castro",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Essentials of Supply Chain Management",
        "courseDescription": "Gain a comprehensive understanding of supply chain management principles and best practices.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/adriana_castro.jpg"
      },
      {
        "name": "Raul Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Communication",
        "courseDescription": "Enhance your communication skills to effectively convey your message and build strong business relationships.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/raul_ramirez.jpg"
      },
      {
        "name": "Laura Perez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Strategy Fundamentals",
        "courseDescription": "Learn the fundamentals of business strategy and how to develop a winning strategy for your business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/laura_perez.jpg"
      },
      {
        "name": "Julio Martinez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Planning",
        "courseDescription": "Learn the essentials of business planning and how to develop a solid roadmap for your business success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/julio_martinez.jpg"
      },
      {
        "name": "Ana Maria Cruz",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurship 101",
        "courseDescription": "Discover the fundamentals of entrepreneurship and how to start and grow your own business.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/ana_maria_cruz.jpg"
      },
      {
        "name": "Pedro Alvarez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Sales Techniques",
        "courseDescription": "Master the art of selling and learn proven techniques to close more deals and increase revenue.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/pedro_alvarez.jpg"
      },
      {
        "name": "Sofia Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Marketing Fundamentals",
        "courseDescription": "Learn the basics of digital marketing and how to leverage online channels to grow your business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/sofia_fernandez.jpg"
      },
      {
        "name": "Javier Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Leadership",
        "courseDescription": "Develop the strategic leadership skills necessary to drive organizational change and achieve business goals.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/javier_gomez.jpg"
      },
      {
        "name": "Luisa Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Management Essentials",
        "courseDescription": "Learn the fundamentals of financial management to effectively manage your business finances and maximize profitability.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/luisa_hernandez.jpg"
      },
      {
        "name": "Miguel Rodriguez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Strategy",
        "courseDescription": "Develop a winning business strategy that aligns with your goals and drives sustainable growth.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/miguel_rodriguez.jpg"
      },
      {
        "name": "Maria Garcia",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Essentials of Entrepreneurial Finance",
        "courseDescription": "Gain a practical understanding of entrepreneurial finance and how to manage finances for business success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_garcia.jpg"
      },
      {
        "name": "Carlos Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Marketing Essentials",
        "courseDescription": "Learn the fundamentals of strategic marketing and how to develop a marketing plan that drives results.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/carlos_ramirez.jpg"
      },
      {
        "name": "Elena Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Social Media Marketing Fundamentals",
        "courseDescription": "Discover the basics of social media marketing and how to use popular platforms to grow your business.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/elena_fernandez.jpg"
      },
      {
        "name": "Diego Martinez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Communication Skills",
        "courseDescription": "Enhance your communication skills to effectively convey your message and build strong business relationships.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/diego_martinez.jpg"
      },
      {
        "name": "Isabella Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Strategy Development",
        "courseDescription": "Learn how to develop a strategic plan that guides your business towards achieving its long-term objectives.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/isabella_hernandez.jpg"
      },
      {
        "name": "Antonio Lopez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Leadership Strategies",
        "courseDescription": "Master the essential leadership strategies to inspire and motivate your team towards achieving business success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/antonio_lopez.jpg"
      },
      {
        "name": "Camila Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Marketing",
        "courseDescription": "Learn how to develop and implement marketing strategies that drive customer engagement and business growth.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/camila_gomez.jpg"
      },
      {
        "name": "Francisco Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Management for Entrepreneurs",
        "courseDescription": "Learn how to manage your business finances effectively to drive profitability and long-term success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/francisco_fernandez.jpg"
      },
      {
        "name": "Valentina Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Business Strategy",
        "courseDescription": "Discover how to develop a digital business strategy that leverages technology to achieve business objectives.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/valentina_ramirez.jpg"
      },
      {
        "name": "Roberto Martinez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Development",
        "courseDescription": "Learn the strategies and tactics to drive business growth and expansion in competitive markets.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/roberto_martinez.jpg"
      },
      {
        "name": "Catalina Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Leadership",
        "courseDescription": "Develop the leadership skills necessary to lead and inspire a team towards achieving business goals.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/catalina_hernandez.jpg"
      },
      {
        "name": "Manuel Rodriguez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Planning",
        "courseDescription": "Learn how to develop a comprehensive business plan that guides your business towards success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/manuel_rodriguez.jpg"
      },
      {
        "name": "Gabriela Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Branding Strategies",
        "courseDescription": "Discover how to develop and implement branding strategies that differentiate your business and attract customers.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/gabriela_fernandez.jpg"
      },
      {
        "name": "Josefina Garcia",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Time Management",
        "courseDescription": "Master time management techniques to boost productivity and achieve work-life balance.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/josefina_garcia.jpg"
      },
      {
        "name": "Rafael Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Startup Essentials",
        "courseDescription": "Learn the essential steps to launch and grow a successful startup from scratch.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/rafael_fernandez.jpg"
      },
      {
        "name": "Alejandra Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Networking",
        "courseDescription": "Unlock the power of networking to build valuable connections and opportunities for your business.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/alejandra_ramirez.jpg"
      },
      {
        "name": "Diego Garcia",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Business Transformation",
        "courseDescription": "Learn how to leverage digital technologies to transform your business and stay competitive in the digital age.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/diego_garcia.jpg"
      },
      {
        "name": "Valentina Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Leadership",
        "courseDescription": "Develop the leadership skills necessary to drive organizational change and achieve business success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/valentina_fernandez.jpg"
      },
      {
        "name": "Andres Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Customer Relationship Management",
        "courseDescription": "Learn how to build and maintain strong relationships with customers to drive loyalty and retention.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/andres_ramirez.jpg"
      },
      {
        "name": "Camila Gonzalez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Marketing Strategies",
        "courseDescription": "Discover powerful marketing strategies to attract, engage, and convert customers for your business.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/camila_gonzalez.jpg"
      },
      {
        "name": "Javier Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Analytics Fundamentals",
        "courseDescription": "Learn the basics of business analytics and how to leverage data for strategic decision-making.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/javier_lopez.jpg"
      },
      {
        "name": "Isabela Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Management for Small Businesses",
        "courseDescription": "Learn essential financial management skills to effectively manage finances and drive profitability in your small business.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/isabela_gomez.jpg"
      },
      {
        "name": "Roberto Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Ethics and Corporate Responsibility",
        "courseDescription": "Explore the importance of ethical behavior and corporate responsibility in business decision-making.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/roberto_hernandez.jpg"
      },
      {
        "name": "Luisa Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Sales Strategies",
        "courseDescription": "Learn proven sales techniques and strategies to close more deals and drive revenue for your business.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/luisa_ramirez.jpg"
      },
      {
        "name": "Diego Martinez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Business Development",
        "courseDescription": "Discover key strategies and tactics for driving sustainable business growth and expansion.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/diego_martinez.jpg"
      },
      {
        "name": "Elena Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Branding Strategies",
        "courseDescription": "Learn how to develop a strong brand identity and positioning strategy to differentiate your business.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/elena_fernandez.jpg"
      },
      {
        "name": "Antonio Rodriguez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Marketing Strategy",
        "courseDescription": "Develop a comprehensive digital marketing strategy to reach and engage your target audience effectively.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/antonio_rodriguez.jpg"
      },
      {
        "name": "Maria Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Entrepreneurial Leadership",
        "courseDescription": "Develop the leadership qualities necessary to inspire and lead a team towards business success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/maria_gomez.jpg"
      },
      {
        "name": "Juan Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Planning for Entrepreneurs",
        "courseDescription": "Learn how to create a comprehensive financial plan to support the growth and sustainability of your business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/juan_hernandez.jpg"
      },
      {
        "name": "Sofia Rodriguez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Communication",
        "courseDescription": "Enhance your communication skills to convey your message clearly and build strong business relationships.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/sofia_rodriguez.jpg"
      },
      {
        "name": "Carlos Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Strategy Execution",
        "courseDescription": "Learn how to effectively execute your business strategy and achieve your desired outcomes.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/carlos_gomez.jpg"
      },
      {
        "name": "Luis Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Project Management",
        "courseDescription": "Master the principles and best practices of project management to ensure successful project delivery.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/luis_fernandez.jpg"
      },
      {
        "name": "Ana Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Social Media Marketing Strategy",
        "courseDescription": "Develop a strategic approach to social media marketing to effectively engage your audience and drive business results.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/ana_ramirez.jpg"
      },
      {
        "name": "Gabriel Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Leadership Development",
        "courseDescription": "Develop essential leadership skills to inspire and empower your team towards achieving organizational goals.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/gabriel_fernandez.jpg"
      },
      {
        "name": "Valeria Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Entrepreneurship Masterclass",
        "courseDescription": "Gain insights into the world of digital entrepreneurship and learn how to build a successful online business.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/valeria_ramirez.jpg"
      },
      {
        "name": "Fernando Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Planning",
        "courseDescription": "Learn how to create a comprehensive business plan that sets clear objectives and strategies for your business.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/fernando_gomez.jpg"
      },
      {
        "name": "Sofia Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Management for Entrepreneurs",
        "courseDescription": "Master the principles of financial management to effectively manage resources and drive business growth.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/sofia_hernandez.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Strategy",
        "courseDescription": "Develop a strategic mindset and learn how to formulate and execute winning business strategies.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Isabella Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Marketing Fundamentals",
        "courseDescription": "Gain a foundational understanding of marketing principles and learn how to develop effective marketing strategies.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/isabella_lopez.jpg"
      },
      {
        "name": "Alejandro Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Advanced Sales Techniques",
        "courseDescription": "Take your sales skills to the next level with advanced techniques and strategies for closing deals.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/alejandro_ramirez.jpg"
      },
      {
        "name": "Lucia Martinez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "E-commerce Essentials",
        "courseDescription": "Learn the fundamentals of e-commerce and how to build and grow a successful online store.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/lucia_martinez.jpg"
      },
      {
        "name": "Carlos Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Communication",
        "courseDescription": "Master communication skills to convey your message clearly and build strong business relationships.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/carlos_fernandez.jpg"
      },
      {
        "name": "Camila Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Business Development",
        "courseDescription": "Explore strategies for driving business growth and expansion in competitive markets.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/camila_ramirez.jpg"
      },
      {
        "name": "Jorge Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Entrepreneurial Finance",
        "courseDescription": "Learn financial management skills to effectively manage finances and drive profitability in your business.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/jorge_gomez.jpg"
      },
      {
        "name": "Maria Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Marketing Strategy",
        "courseDescription": "Develop a comprehensive digital marketing strategy to reach and engage your target audience effectively.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_ramirez.jpg"
      },
      {
        "name": "Daniel Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Leadership",
        "courseDescription": "Develop leadership qualities to inspire and lead a team towards achieving business goals.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/daniel_fernandez.jpg"
      },
      {
        "name": "Valentina Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Startup Growth Strategies",
        "courseDescription": "Learn strategies and tactics to accelerate growth and scale your startup to the next level.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/valentina_gomez.jpg"
      },
      {
        "name": "Pedro Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Marketing Planning",
        "courseDescription": "Develop a strategic marketing plan to effectively reach and engage your target audience.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/pedro_ramirez.jpg"
      },
      {
        "name": "Ana Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Planning Essentials",
        "courseDescription": "Learn the fundamentals of financial planning to achieve financial stability and success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/ana_fernandez.jpg"
      },
      {
        "name": "Diego Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Negotiation Skills",
        "courseDescription": "Master negotiation techniques to achieve win-win outcomes in business deals and partnerships.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/diego_gomez.jpg"
      },
      {
        "name": "Gabriela Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "E-commerce Strategy",
        "courseDescription": "Develop an effective e-commerce strategy to attract customers and drive sales in the online marketplace.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/gabriela_ramirez.jpg"
      },
      {
        "name": "Javier Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Analytics",
        "courseDescription": "Leverage data analytics to gain valuable insights and make informed decisions for business growth.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/javier_fernandez.jpg"
      },
      {
        "name": "Maria Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Mindset",
        "courseDescription": "Cultivate an entrepreneurial mindset to identify opportunities and overcome challenges in business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_fernandez.jpg"
      },
      {
        "name": "Ricardo Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Team Management",
        "courseDescription": "Learn how to build and lead high-performing teams to achieve organizational goals.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/ricardo_hernandez.jpg"
      },
      {
        "name": "Laura Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Marketing Essentials",
        "courseDescription": "Gain a comprehensive understanding of digital marketing concepts and strategies for business success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/laura_gomez.jpg"
      },
      {
        "name": "Juan Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Development",
        "courseDescription": "Explore strategies and tactics for driving business growth and expansion in dynamic markets.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/juan_ramirez.jpg"
      },
      {
        "name": "Sara Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Leadership",
        "courseDescription": "Develop the leadership skills necessary to inspire and lead a team towards business success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/sara_fernandez.jpg"
      },
      {
        "name": "Carlos Gonzalez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Strategy",
        "courseDescription": "Learn how to develop a strategic plan that aligns with your business goals and drives growth.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/carlos_gonzalez.jpg"
      },
      {
        "name": "Valeria Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Management Fundamentals",
        "courseDescription": "Gain a solid understanding of financial management principles and practices for business success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/valeria_fernandez.jpg"
      },
      {
        "name": "Diego Lopez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Sales Strategies",
        "courseDescription": "Discover proven sales techniques and strategies to drive revenue and achieve sales targets.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/diego_lopez.jpg"
      },
      {
        "name": "Ana Gonzalez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Innovation",
        "courseDescription": "Learn how to foster a culture of innovation and drive business growth through creative thinking.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/ana_gonzalez.jpg"
      },
      {
        "name": "Manuel Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Marketing Strategies",
        "courseDescription": "Discover powerful marketing strategies to attract and retain customers and drive business growth.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/manuel_fernandez.jpg"
      },
      {
        "name": "Luisa Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "E-commerce Strategy",
        "courseDescription": "Develop a comprehensive e-commerce strategy to optimize online sales and maximize profitability.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/luisa_gomez.jpg"
      },
      {
        "name": "Jorge Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Planning for Entrepreneurs",
        "courseDescription": "Learn how to create a financial plan that supports the growth and sustainability of your entrepreneurial venture.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/jorge_ramirez.jpg"
      },
      {
        "name": "Elena Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Social Media Marketing Strategies",
        "courseDescription": "Discover effective social media marketing strategies to build brand awareness and engage your audience.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/elena_gomez.jpg"
      },
      {
        "name": "Francisco Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Communication",
        "courseDescription": "Enhance your communication skills to convey your message clearly and build strong business relationships.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/francisco_ramirez.jpg"
      },
      {
        "name": "Maria Gonzalez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Finance",
        "courseDescription": "Gain practical knowledge of financial management for entrepreneurs to drive business success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/maria_gonzalez.jpg"
      },
      {
        "name": "Alejandro Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Leadership",
        "courseDescription": "Develop the leadership skills necessary to drive organizational change and achieve business goals.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/alejandro_fernandez.jpg"
      },
      {
        "name": "Valentina Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Business Transformation",
        "courseDescription": "Learn how to leverage digital technologies to transform your business and stay competitive in the digital age.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/valentina_gomez.jpg"
      },
      {
        "name": "Andres Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Project Management",
        "courseDescription": "Master project management principles and practices to ensure successful project delivery.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/andres_ramirez.jpg"
      },
      {
        "name": "Camila Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Marketing Analytics",
        "courseDescription": "Learn how to analyze marketing data to optimize campaigns and drive better business outcomes.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/camila_fernandez.jpg"
      },
      {
        "name": "Diego Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Negotiation Skills",
        "courseDescription": "Master negotiation techniques to achieve mutually beneficial outcomes and drive business success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/diego_hernandez.jpg"
      },
      {
        "name": "Maria Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Strategy Execution",
        "courseDescription": "Learn how to effectively execute your business strategy and achieve your desired outcomes.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_ramirez.jpg"
      },
      {
        "name": "Javier Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Leadership",
        "courseDescription": "Develop leadership qualities to inspire and lead a team towards achieving business goals.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/javier_gomez.jpg"
      },
      {
        "name": "Sofia Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Marketing Planning",
        "courseDescription": "Learn how to create a strategic marketing plan that drives business growth and success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/sofia_ramirez.jpg"
      },
      {
        "name": "Daniel Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Management for Entrepreneurs",
        "courseDescription": "Master financial management principles and practices to effectively manage resources and drive business growth.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/daniel_hernandez.jpg"
      },
      {
        "name": "Valeria Gonzalez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "E-commerce Strategy",
        "courseDescription": "Develop an effective e-commerce strategy to maximize online sales and grow your business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/valeria_gonzalez.jpg"
      },
      {
        "name": "Alejandro Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Strategy",
        "courseDescription": "Learn how to formulate and implement a strategic plan that drives business success and growth.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/alejandro_gomez.jpg"
      },
      {
        "name": "Lucia Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Finance",
        "courseDescription": "Gain essential financial management skills for entrepreneurs to manage finances effectively and drive profitability.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/lucia_ramirez.jpg"
      },
      {
        "name": "Carlos Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Digital Marketing Strategy",
        "courseDescription": "Develop a comprehensive digital marketing strategy to reach and engage your target audience effectively.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/carlos_hernandez.jpg"
      },
      {
        "name": "Ana Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Innovation",
        "courseDescription": "Explore innovative approaches to business and learn how to drive growth through creativity and adaptation.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/ana_gomez.jpg"
      },
      {
        "name": "Manuel Gonzalez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Project Management",
        "courseDescription": "Master project management principles and practices to ensure successful project delivery on time and within budget.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/manuel_gonzalez.jpg"
      },
      {
        "name": "Camila Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Marketing Analytics",
        "courseDescription": "Learn how to analyze marketing data to optimize campaigns and drive better business outcomes.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/camila_ramirez.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Negotiation Skills",
        "courseDescription": "Master negotiation techniques to achieve win-win outcomes and build successful business relationships.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Maria Gonzalez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Strategy Execution",
        "courseDescription": "Learn how to effectively execute your business strategy and achieve your desired outcomes.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_gonzalez.jpg"
      },
      {
        "name": "Francisco Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Communication",
        "courseDescription": "Enhance your communication skills to convey your message clearly and build strong business relationships.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/francisco_ramirez.jpg"
      },
      {
        "name": "Elena Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Finance",
        "courseDescription": "Gain practical knowledge of financial management for entrepreneurs to drive business success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/elena_gomez.jpg"
      },
      {
        "name": "Alejandro Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Leadership",
        "courseDescription": "Develop the leadership skills necessary to drive organizational change and achieve business goals.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/alejandro_fernandez.jpg"
      },
      {
        "name": "Valentina Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Business Transformation",
        "courseDescription": "Learn how to leverage digital technologies to transform your business and stay competitive in the digital age.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/valentina_gomez.jpg"
      },
      {
        "name": "Andres Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Project Management",
        "courseDescription": "Master project management principles and practices to ensure successful project delivery.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/andres_ramirez.jpg"
      },
      {
        "name": "Camila Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Marketing Analytics",
        "courseDescription": "Learn how to analyze marketing data to optimize campaigns and drive better business outcomes.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/camila_fernandez.jpg"
      },
      {
        "name": "Diego Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Negotiation Skills",
        "courseDescription": "Master negotiation techniques to achieve mutually beneficial outcomes and drive business success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/diego_hernandez.jpg"
      },
      {
        "name": "Maria Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Strategy Execution",
        "courseDescription": "Learn how to effectively execute your business strategy and achieve your desired outcomes.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_ramirez.jpg"
      },
      {
        "name": "Antonio Lopez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Development",
        "courseDescription": "Learn strategic approaches to business development for sustainable growth and competitive advantage.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/antonio_lopez.jpg"
      },
      {
        "name": "Isabella Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Marketing Fundamentals",
        "courseDescription": "Master the foundational concepts of digital marketing to create effective online campaigns.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/isabella_fernandez.jpg"
      },
      {
        "name": "Miguel Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Leadership Skills",
        "courseDescription": "Develop leadership skills to inspire and motivate teams towards achieving business goals.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/miguel_ramirez.jpg"
      },
      {
        "name": "Valentina Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "E-commerce Essentials",
        "courseDescription": "Learn essential strategies and tools for launching and managing a successful e-commerce business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/valentina_hernandez.jpg"
      },
      {
        "name": "Carlos Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Business Planning",
        "courseDescription": "Master the art of strategic planning to drive business growth and achieve long-term success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/carlos_ramirez.jpg"
      },
      {
        "name": "Laura Gonzalez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Management for Entrepreneurs",
        "courseDescription": "Learn financial management techniques tailored for entrepreneurs to optimize resources and maximize profits.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/laura_gonzalez.jpg"
      },
      {
        "name": "Gabriel Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Advanced Sales Techniques",
        "courseDescription": "Master advanced sales strategies and tactics to close deals and drive revenue growth.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/gabriel_ramirez.jpg"
      },
      {
        "name": "Sofia Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Social Media Marketing Strategy",
        "courseDescription": "Develop a strategic approach to social media marketing to effectively engage and convert audiences.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/sofia_gomez.jpg"
      },
      {
        "name": "Diego Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Communication",
        "courseDescription": "Enhance communication skills to build strong relationships and convey messages effectively in business settings.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/diego_hernandez.jpg"
      },
      {
        "name": "Ana Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Marketing Management",
        "courseDescription": "Learn strategic marketing management principles to drive business growth and achieve competitive advantage.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/ana_fernandez.jpg"
      },
      {
        "name": "Javier Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Entrepreneurial Finance",
        "courseDescription": "Gain insights into financial management strategies for startups and small businesses to drive profitability.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/javier_ramirez.jpg"
      },
      {
        "name": "Maria Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Branding Essentials",
        "courseDescription": "Learn essential branding strategies and techniques to create a strong digital presence for your business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_gomez.jpg"
      },
      {
        "name": "Fernando Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Project Management",
        "courseDescription": "Learn project management methodologies and best practices to ensure project success and delivery.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/fernando_ramirez.jpg"
      },
      {
        "name": "Valeria Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "E-commerce Strategy",
        "courseDescription": "Develop a winning e-commerce strategy to attract customers, drive sales, and increase profitability.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/valeria_fernandez.jpg"
      },
      {
        "name": "Ricardo Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Business Strategy",
        "courseDescription": "Learn how to develop and execute a strategic plan that drives business growth and success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/ricardo_gomez.jpg"
      },
      {
        "name": "Elena Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Planning for Entrepreneurs",
        "courseDescription": "Master financial planning techniques tailored for entrepreneurs to achieve long-term business success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/elena_ramirez.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Effective Leadership Development",
        "courseDescription": "Develop essential leadership skills to inspire and lead teams towards achieving organizational goals.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Camila Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Social Media Marketing Strategy",
        "courseDescription": "Learn effective social media marketing strategies to build brand awareness and drive engagement.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/camila_hernandez.jpg"
      },
      {
        "name": "Manuel Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Marketing Planning",
        "courseDescription": "Develop a strategic marketing plan to effectively target and engage your audience for business growth.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/manuel_gomez.jpg"
      },
      {
        "name": "Valentina Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Analytics Fundamentals",
        "courseDescription": "Gain foundational knowledge of business analytics to make data-driven decisions for business success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/valentina_ramirez.jpg"
      },
      {
        "name": "Isabella Rodriguez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Mastering Creative Marketing",
        "courseDescription": "Unleash your creativity and learn innovative marketing strategies to captivate audiences and drive business growth.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/isabella_rodriguez.jpg"
      },
      {
        "name": "Sebastian Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Storytelling in Business",
        "courseDescription": "Harness the power of storytelling to connect with customers, inspire action, and differentiate your brand in the market.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/sebastian_gomez.jpg"
      },
      {
        "name": "Luna Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Unlocking Entrepreneurial Creativity",
        "courseDescription": "Discover techniques to unlock your entrepreneurial creativity and innovate solutions for business challenges.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/luna_ramirez.jpg"
      },
      {
        "name": "Mateo Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Science of Persuasion",
        "courseDescription": "Explore the psychological principles behind persuasion and influence to enhance your negotiation and sales skills.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/mateo_hernandez.jpg"
      },
      {
        "name": "Valentina Lopez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Adventures in Business Innovation",
        "courseDescription": "Embark on a journey of business innovation and learn how to foster creativity and drive growth in your organization.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/valentina_lopez.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Branding Secrets Unveiled",
        "courseDescription": "Uncover the secrets to building a strong digital brand identity that resonates with your target audience and boosts brand equity.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Ana Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Leadership Mastery",
        "courseDescription": "Master the art of strategic leadership to navigate complex challenges and drive organizational success with confidence.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/ana_gomez.jpg"
      },
      {
        "name": "Javier Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Ultimate Guide to Digital Transformation",
        "courseDescription": "Learn how to lead successful digital transformation initiatives that drive innovation, efficiency, and competitive advantage.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/javier_ramirez.jpg"
      },
      {
        "name": "Valeria Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Psychology of Consumer Behavior",
        "courseDescription": "Dive deep into consumer psychology and leverage insights to create irresistible products, services, and marketing campaigns.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/valeria_fernandez.jpg"
      },
      {
        "name": "Gabriel Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Innovative Growth Strategies",
        "courseDescription": "Discover innovative strategies for driving business growth in a rapidly changing market landscape.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/gabriel_ramirez.jpg"
      },
      {
        "name": "Sofia Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Art of Strategic Decision Making",
        "courseDescription": "Master the art of making strategic decisions that propel your business forward and outmaneuver competitors.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/sofia_hernandez.jpg"
      },
      {
        "name": "Daniel Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Entrepreneur's Guide to Financial Freedom",
        "courseDescription": "Learn essential financial management strategies and principles to achieve financial freedom and business success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/daniel_gomez.jpg"
      },
      {
        "name": "Luisa Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Future of Work: Embracing Remote Collaboration",
        "courseDescription": "Explore best practices and tools for remote collaboration to thrive in the evolving landscape of the future workplace.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/luisa_ramirez.jpg"
      },
      {
        "name": "Carlos Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Brand Storytelling",
        "courseDescription": "Discover how to craft compelling brand stories that resonate with your audience and drive brand loyalty.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/carlos_fernandez.jpg"
      },
      {
        "name": "Elena Lopez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Power of Emotional Intelligence in Leadership",
        "courseDescription": "Harness the power of emotional intelligence to build strong relationships, inspire trust, and lead with empathy.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/elena_lopez.jpg"
      },
      {
        "name": "Miguel Gonzalez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Secrets of High-Performance Teams",
        "courseDescription": "Unlock the secrets to building and leading high-performance teams that drive innovation and deliver results.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/miguel_gonzalez.jpg"
      },
      {
        "name": "Valentina Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Art of Influence: Persuasion in Business",
        "courseDescription": "Master the art of influence and persuasion to negotiate effectively, drive sales, and win over stakeholders.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/valentina_gomez.jpg"
      },
      {
        "name": "Andres Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Entrepreneur's Guide to Digital Marketing",
        "courseDescription": "Learn digital marketing strategies and tactics tailored for entrepreneurs to build brand awareness and drive growth.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/andres_ramirez.jpg"
      },
      {
        "name": "Camila Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Art of Disruption: Innovating in Established Industries",
        "courseDescription": "Discover strategies for disrupting traditional industries through innovation and creating new market opportunities.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/camila_hernandez.jpg"
      },
      {
        "name": "Manuel Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Retail: E-commerce Evolution",
        "courseDescription": "Explore the future trends and innovations shaping the e-commerce landscape and learn how to stay ahead of the curve.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/manuel_gomez.jpg"
      },
      {
        "name": "Alicia Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Innovative Marketing Strategies for Gen Z",
        "courseDescription": "Unlock the secrets to effectively reaching and engaging Generation Z consumers with cutting-edge marketing strategies.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/alicia_fernandez.jpg"
      },
      {
        "name": "Julio Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Virtual Presentations",
        "courseDescription": "Master the art of delivering engaging and impactful presentations in virtual environments for business success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/julio_ramirez.jpg"
      },
      {
        "name": "Valeria Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Innovation: From Idea to Execution",
        "courseDescription": "Learn how to foster a culture of innovation, generate groundbreaking ideas, and execute them effectively for business growth.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/valeria_hernandez.jpg"
      },
      {
        "name": "Juan Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Work: Remote Collaboration",
        "courseDescription": "Discover best practices for remote collaboration and effectively lead teams in distributed work environments.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/juan_lopez.jpg"
      },
      {
        "name": "Isabella Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Psychology of Brand Loyalty",
        "courseDescription": "Gain insights into the psychological factors that drive brand loyalty and learn how to cultivate a loyal customer base.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/isabella_ramirez.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Data-Driven Decision Making for Entrepreneurs",
        "courseDescription": "Learn how to leverage data analytics to make informed business decisions and drive growth.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Valentina Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Building Resilience in Times of Crisis",
        "courseDescription": "Develop resilience strategies to navigate challenges and emerge stronger in the face of adversity.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/valentina_gomez.jpg"
      },
      {
        "name": "Lucas Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Digital Storytelling",
        "courseDescription": "Learn how to craft compelling narratives that resonate with digital audiences and drive engagement.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/lucas_hernandez.jpg"
      },
      {
        "name": "Elena Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Negotiation Techniques",
        "courseDescription": "Master negotiation techniques and tactics to achieve favorable outcomes and build successful business relationships.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/elena_ramirez.jpg"
      },
      {
        "name": "Alejandro Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Customer Experience Design",
        "courseDescription": "Discover how to create exceptional customer experiences that drive loyalty, retention, and advocacy.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/alejandro_gomez.jpg"
      },
      {
        "name": "Sofia Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Leadership for Sustainable Growth",
        "courseDescription": "Develop leadership skills and strategies to drive sustainable growth and organizational success.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/sofia_hernandez.jpg"
      },
      {
        "name": "Carlos Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Retail: Omnichannel Strategies",
        "courseDescription": "Explore omnichannel retail strategies to seamlessly integrate online and offline experiences and drive sales.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/carlos_ramirez.jpg"
      },
      {
        "name": "Maria Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Talent Management",
        "courseDescription": "Learn how to attract, retain, and develop top talent to drive organizational performance and achieve business goals.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/maria_fernandez.jpg"
      },
      {
        "name": "Juan Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Influence: Persuasion in Business",
        "courseDescription": "Master the art of influence and persuasion to negotiate effectively, drive sales, and win over stakeholders.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/juan_gomez.jpg"
      },
      {
        "name": "Valeria Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Power of Agile Leadership",
        "courseDescription": "Learn how to lead with agility and adaptability to navigate change and drive business innovation.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/valeria_ramirez.jpg"
      },
      {
        "name": "Diego Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Work: Remote Team Management",
        "courseDescription": "Discover strategies for effectively managing remote teams and maximizing productivity in virtual work environments.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/diego_hernandez.jpg"
      },
      {
        "name": "Camila Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Brand Positioning",
        "courseDescription": "Learn how to position your brand effectively in the market to stand out from competitors and attract loyal customers.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/camila_gomez.jpg"
      },
      {
        "name": "Andres Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Sales Psychology",
        "courseDescription": "Explore the psychological principles behind successful sales techniques and strategies to close more deals.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/andres_fernandez.jpg"
      },
      {
        "name": "Isabella Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Crisis Management",
        "courseDescription": "Develop crisis management strategies to effectively navigate and mitigate risks during challenging times.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/isabella_hernandez.jpg"
      },
      {
        "name": "Lucas Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Digital Transformation",
        "courseDescription": "Learn how to lead successful digital transformation initiatives that drive innovation and growth in your organization.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/lucas_ramirez.jpg"
      },
      {
        "name": "Carmen Lopez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Art of Product Positioning",
        "courseDescription": "Learn how to strategically position your products in the market to attract your target audience and drive sales.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/carmen_lopez.jpg"
      },
      {
        "name": "Mateo Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Time Management Strategies",
        "courseDescription": "Discover techniques for managing your time efficiently to increase productivity and achieve your business goals.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/mateo_fernandez.jpg"
      },
      {
        "name": "Valeria Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Art of Strategic Partnerships",
        "courseDescription": "Unlock the power of strategic partnerships to expand your reach, enhance your offerings, and drive mutual growth.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/valeria_gomez.jpg"
      },
      {
        "name": "Emilio Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Psychology of Entrepreneurship",
        "courseDescription": "Explore the mindset and psychological traits of successful entrepreneurs to fuel your own entrepreneurial journey.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/emilio_ramirez.jpg"
      },
      {
        "name": "Luna Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Building a High-Performance Culture",
        "courseDescription": "Learn how to create a culture of high performance within your organization to drive productivity and success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/luna_fernandez.jpg"
      },
      {
        "name": "Diego Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Pricing",
        "courseDescription": "Discover strategies for setting prices that maximize profitability and align with your business objectives.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/diego_gomez.jpg"
      },
      {
        "name": "Sofia Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Future of Work: Remote Leadership",
        "courseDescription": "Develop leadership skills to effectively lead remote teams and navigate the challenges of remote work.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/sofia_ramirez.jpg"
      },
      {
        "name": "Julian Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Business Networking",
        "courseDescription": "Learn how to build meaningful professional relationships and leverage your network for business success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/julian_hernandez.jpg"
      },
      {
        "name": "Valentina Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Entrepreneur's Guide to Growth Hacking",
        "courseDescription": "Discover growth hacking techniques and strategies to rapidly grow your startup or small business.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/valentina_ramirez.jpg"
      },
      {
        "name": "Lucia Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Customer Relationship Management",
        "courseDescription": "Learn how to build and maintain strong relationships with customers to drive loyalty and retention.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/lucia_gomez.jpg"
      },
      {
        "name": "Andres Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Digital Transformation",
        "courseDescription": "Navigate the complexities of digital transformation and drive innovation and growth in your organization.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/andres_hernandez.jpg"
      },
      {
        "name": "Elena Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Personal Branding",
        "courseDescription": "Learn how to craft a compelling personal brand that sets you apart and attracts opportunities.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/elena_gomez.jpg"
      },
      {
        "name": "Gabriel Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Future of Retail: E-commerce Strategies",
        "courseDescription": "Explore innovative e-commerce strategies to stay competitive and thrive in the evolving retail landscape.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/gabriel_hernandez.jpg"
      },
      {
        "name": "Camila Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Decision Making",
        "courseDescription": "Learn how to make strategic decisions that drive business growth and create long-term value.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/camila_ramirez.jpg"
      },
      {
        "name": "Carlos Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Science of Consumer Behavior",
        "courseDescription": "Gain insights into consumer behavior and psychology to optimize your marketing strategies and drive sales.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/carlos_fernandez.jpg"
      },
      {
        "name": "Maria Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Business Model Innovation",
        "courseDescription": "Discover strategies for innovating your business model to stay relevant and competitive in a rapidly changing market.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_hernandez.jpg"
      },
      {
        "name": "Javier Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Entrepreneur's Guide to Scaling",
        "courseDescription": "Learn how to scale your business effectively while maintaining operational efficiency and profitability.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/javier_gomez.jpg"
      },
      {
        "name": "Valentina Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Customer Segmentation",
        "courseDescription": "Discover how to segment your customer base effectively to tailor your marketing efforts and drive customer engagement.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/valentina_lopez.jpg"
      },
      {
        "name": "Luis Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "The Future of Work: Building Remote Teams",
        "courseDescription": "Learn how to build and manage high-performing remote teams to drive productivity and collaboration.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/luis_ramirez.jpg"
      },
      {
        "name": "Ana Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Innovation",
        "courseDescription": "Discover frameworks and techniques for fostering a culture of innovation and driving strategic innovation initiatives.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/ana_fernandez.jpg"
      },
      {
        "name": "Marcela Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Mastering Digital Marketing",
        "courseDescription": "Unlock the power of digital marketing to drive traffic, generate leads, and boost sales for your business.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/marcela_gomez.jpg"
      },
      {
        "name": "Ricardo Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Project Management Techniques",
        "courseDescription": "Learn proven project management techniques to successfully plan, execute, and deliver projects on time and within budget.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/ricardo_hernandez.jpg"
      },
      {
        "name": "Isabel Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Fundamentals of Business Strategy",
        "courseDescription": "Gain a solid understanding of business strategy fundamentals and learn how to formulate and execute strategic plans.",
        "ratings": 5,
        "price": 1300,
        "imageUrl": "https://example.com/isabel_ramirez.jpg"
      },
      {
        "name": "Juanita Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Negotiation",
        "courseDescription": "Master negotiation skills to achieve win-win outcomes, build strong relationships, and maximize business opportunities.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/juanita_fernandez.jpg"
      },
      {
        "name": "Diego Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Psychology of Marketing",
        "courseDescription": "Explore the psychological principles that influence consumer behavior and learn how to apply them in your marketing strategies.",
        "ratings": 5,
        "price": 1100,
        "imageUrl": "https://example.com/diego_lopez.jpg"
      },
      {
        "name": "Valeria Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Business Development",
        "courseDescription": "Develop strategic business development skills to identify growth opportunities, forge partnerships, and expand your business.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/valeria_fernandez.jpg"
      },
      {
        "name": "Santiago Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Leadership",
        "courseDescription": "Learn essential leadership skills and techniques to inspire and motivate your team to achieve outstanding results.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/santiago_gomez.jpg"
      },
      {
        "name": "Luisa Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Digital Branding Strategies",
        "courseDescription": "Discover effective digital branding strategies to build brand awareness, credibility, and loyalty in the digital age.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/luisa_hernandez.jpg"
      },
      {
        "name": "Eduardo Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Public Speaking",
        "courseDescription": "Develop confidence and charisma as a public speaker and learn how to deliver impactful presentations that resonate with your audience.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/eduardo_ramirez.jpg"
      },
      {
        "name": "Ana Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Financial Management",
        "courseDescription": "Learn strategic financial management techniques to optimize financial performance, mitigate risks, and create value for your business.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/ana_gomez.jpg"
      },
      {
        "name": "Javier Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Innovation",
        "courseDescription": "Cultivate a culture of innovation within your organization and learn how to generate and implement innovative ideas.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/javier_hernandez.jpg"
      },
      {
        "name": "Maria Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Essentials of Entrepreneurship",
        "courseDescription": "Get a comprehensive overview of entrepreneurship essentials and learn how to start and grow your own business.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/maria_lopez.jpg"
      },
      {
        "name": "Pedro Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Time Management",
        "courseDescription": "Master time management techniques to increase productivity, reduce stress, and achieve work-life balance.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/pedro_fernandez.jpg"
      },
      {
        "name": "Isabella Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Psychology of Leadership",
        "courseDescription": "Explore the psychological aspects of leadership and learn how to inspire and motivate others to achieve common goals.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/isabella_gomez.jpg"
      },
      {
        "name": "Manuel Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Customer Acquisition",
        "courseDescription": "Discover effective strategies and tactics for acquiring new customers and growing your customer base.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/manuel_ramirez.jpg"
      },
      {
        "name": "Valentina Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Work: Remote Collaboration",
        "courseDescription": "Explore best practices for remote collaboration and effectively lead teams in distributed work environments.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/valentina_hernandez.jpg"
      },
      {
        "name": "Luis Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Brand Management",
        "courseDescription": "Learn how to develop and manage a strong brand identity to differentiate your business and drive customer loyalty.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/luis_gomez.jpg"
      },
      {
        "name": "Sofia Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Planning",
        "courseDescription": "Develop strategic planning skills to set clear objectives, allocate resources effectively, and achieve business success.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/sofia_ramirez.jpg"
      },
      {
        "name": "Andrea Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Retail: Omnichannel Strategies",
        "courseDescription": "Explore omnichannel retail strategies to seamlessly integrate online and offline experiences and drive sales.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/andrea_hernandez.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Business Analytics",
        "courseDescription": "Learn how to leverage business analytics to gain valuable insights and make data-driven decisions for business success.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Mariana Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Brand Storytelling",
        "courseDescription": "Learn how to craft compelling brand stories that resonate with your audience and build emotional connections.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/mariana_gomez.jpg"
      },
      {
        "name": "Gabriel Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Essentials of Business Communication",
        "courseDescription": "Master the fundamentals of effective business communication to convey your message clearly and persuasively.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/gabriel_ramirez.jpg"
      },
      {
        "name": "Luna Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Human Resource Management",
        "courseDescription": "Learn how to align HR strategies with business objectives, attract top talent, and foster a high-performance culture.",
        "ratings": 5,
        "price": 1300,
        "imageUrl": "https://example.com/luna_hernandez.jpg"
      },
      {
        "name": "Diego Lopez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Data Visualization",
        "courseDescription": "Discover techniques for creating impactful data visualizations that effectively communicate insights and drive decision-making.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/diego_lopez.jpg"
      },
      {
        "name": "Valentina Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Science of Emotional Intelligence",
        "courseDescription": "Develop emotional intelligence skills to enhance self-awareness, manage emotions, and build stronger relationships.",
        "ratings": 5,
        "price": 1100,
        "imageUrl": "https://example.com/valentina_ramirez.jpg"
      },
      {
        "name": "Jorge Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Work: Remote Team Collaboration",
        "courseDescription": "Learn strategies and tools for fostering collaboration and teamwork in remote work environments.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/jorge_gomez.jpg"
      },
      {
        "name": "Camila Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Innovation",
        "courseDescription": "Explore techniques for fostering a culture of innovation and driving strategic innovation initiatives.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/camila_hernandez.jpg"
      },
      {
        "name": "Santiago Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Retail: Customer Experience Strategies",
        "courseDescription": "Discover strategies for delivering exceptional customer experiences both online and offline to drive loyalty and retention.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/santiago_ramirez.jpg"
      },
      {
        "name": "Elena Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Leadership Development",
        "courseDescription": "Learn how to develop leadership skills in yourself and others to drive organizational success and growth.",
        "ratings": 5,
        "price": 1300,
        "imageUrl": "https://example.com/elena_gomez.jpg"
      },
      {
        "name": "Carlos Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Work: Remote Employee Engagement",
        "courseDescription": "Discover strategies for engaging and motivating remote employees to foster productivity, satisfaction, and retention.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/carlos_hernandez.jpg"
      },
      {
        "name": "Isabella Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Decision-Making",
        "courseDescription": "Learn how to make informed and effective strategic decisions that drive business growth and success.",
        "ratings": 5,
        "price": 1100,
        "imageUrl": "https://example.com/isabella_ramirez.jpg"
      },
      {
        "name": "Lucas Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Psychology of Consumer Behavior",
        "courseDescription": "Gain insights into the psychological factors that influence consumer behavior and learn how to apply them in marketing.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/lucas_gomez.jpg"
      },
      {
        "name": "Valeria Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Partnerships",
        "courseDescription": "Discover how to identify, cultivate, and leverage strategic partnerships to drive business growth and innovation.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/valeria_hernandez.jpg"
      },
      {
        "name": "Diego Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Work: Remote Leadership",
        "courseDescription": "Learn how to lead remote teams effectively, foster collaboration, and drive performance in virtual work environments.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/diego_ramirez.jpg"
      },
      {
        "name": "Sofia Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Business Development",
        "courseDescription": "Learn how to identify growth opportunities, forge strategic partnerships, and expand your business effectively.",
        "ratings": 5,
        "price": 1300,
        "imageUrl": "https://example.com/sofia_gomez.jpg"
      },
      {
        "name": "Mateo Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Product Management",
        "courseDescription": "Master the skills and techniques of product management to successfully develop and launch products that meet customer needs.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/mateo_hernandez.jpg"
      },
      {
        "name": "Juliana Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Essentials of Digital Transformation",
        "courseDescription": "Gain a comprehensive understanding of digital transformation concepts, strategies, and best practices.",
        "ratings": 5,
        "price": 1100,
        "imageUrl": "https://example.com/juliana_ramirez.jpg"
      },
      {
        "name": "Andres Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Strategic Marketing",
        "courseDescription": "Learn how to develop and implement strategic marketing plans that drive brand awareness, engagement, and sales.",
        "ratings": 4,
        "price": 1300,
        "imageUrl": "https://example.com/andres_gomez.jpg"
      },
      {
        "name": "Valentina Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Future of Work: Remote Collaboration",
        "courseDescription": "Explore best practices for remote collaboration and effectively lead teams in distributed work environments.",
        "ratings": 5,
        "price": 1200,
        "imageUrl": "https://example.com/valentina_ramirez.jpg"
      },
      {
        "name": "Luis Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "The Art of Sales Negotiation",
        "courseDescription": "Master negotiation techniques and strategies to achieve win-win outcomes and close deals effectively.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/luis_hernandez.jpg"
      }
]


module.exports = courses