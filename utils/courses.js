const courses = [
  {
    "name": "Sophia Chen",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI in Business Strategy",
    "courseDescription": "Explore how AI is transforming business strategy and learn how to leverage AI technologies to gain a competitive edge.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/sophia_chen.jpg"
  },
  {
    "name": "Maxwell Johnson",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "The Future of Work: AI and Automation",
    "courseDescription": "Discover the impact of AI and automation on the future of work and learn how to adapt and thrive in the changing landscape.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/maxwell_johnson.jpg"
  },
  {
    "name": "Emily Wang",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Ethical AI in Business",
    "courseDescription": "Learn about the ethical implications of AI in business and develop strategies for responsible AI adoption and implementation.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/emily_wang.jpg"
  },
  {
    "name": "Michael Li",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Business Innovation",
    "courseDescription": "Discover how AI is driving business innovation and learn how to harness AI technologies to foster innovation in your organization.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/michael_li.jpg"
  },
  {
    "name": "Ava Patel",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI for Business Leaders",
    "courseDescription": "Gain insights into AI technologies and their business applications to make informed decisions and drive business growth.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/ava_patel.jpg"
  },
  {
    "name": "Benjamin Carter",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Advanced Business Analysis Techniques",
    "courseDescription": "Explore advanced techniques for business analysis, including decision trees, regression analysis, and scenario planning.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/benjamin_carter.jpg"
  },
  {
    "name": "Victoria Mitchell",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Quantitative Analysis for Business",
    "courseDescription": "Learn how to use quantitative analysis methods to analyze business data and make informed decisions.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/victoria_mitchell.jpg"
  },
  {
    "name": "Daniel Cooper",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Process Analysis and Optimization",
    "courseDescription": "Master the art of analyzing and optimizing business processes to drive efficiency and achieve strategic objectives.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/daniel_cooper.jpg"
  },
  {
    "name": "Hannah Rodriguez",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Strategic Business Analysis",
    "courseDescription": "Learn how to conduct strategic business analysis to identify opportunities, assess risks, and develop actionable plans.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/hannah_rodriguez.jpg"
  },
  {
    "name": "Christopher Martinez",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Process Analysis Frameworks",
    "courseDescription": "Explore different frameworks for analyzing business processes and selecting the most appropriate ones for your organization.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/christopher_martinez.jpg"
  },
  {
    "name": "Madison Hall",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Analysis Essentials",
    "courseDescription": "Master the essential skills and techniques of business analysis to drive successful business outcomes.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/madison_hall.jpg"
  },
  {
    "name": "Elijah Green",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Data Analysis Strategies",
    "courseDescription": "Learn effective strategies for analyzing business data to gain insights, make decisions, and drive business growth.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/elijah_green.jpg"
  },
  {
    "name": "Sophia Baker",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Process Analysis Fundamentals",
    "courseDescription": "Learn the fundamentals of business process analysis, including process identification, documentation, and optimization.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/sophia_baker.jpg"
  },
  {
    "name": "Jack Evans",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Analysis and Decision Making",
    "courseDescription": "Explore how business analysis informs decision-making processes and drives organizational success.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/jack_evans.jpg"
  },
  {
    "name": "Ava Thompson",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Process Analysis Techniques",
    "courseDescription": "Discover a variety of techniques for analyzing business processes and identifying opportunities for improvement.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/ava_thompson.jpg"
  },
  {
    "name": "William Scott",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Analysis for Project Managers",
    "courseDescription": "Learn how to apply business analysis techniques to project management processes to deliver successful projects.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/william_scott.jpg"
  },
  {
    "name": "Sophie King",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Process Analysis Tools",
    "courseDescription": "Explore a variety of tools and software used for business process analysis and optimization.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/sophie_king.jpg"
  },
  {
    "name": "Liam Young",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Analysis for Agile Teams",
    "courseDescription": "Learn how to apply business analysis techniques within agile teams to deliver value incrementally and adapt to change.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/liam_young.jpg"
  },
  {
    "name": "Aria Lee",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Process Analysis Best Practices",
    "courseDescription": "Discover best practices for conducting business process analysis to drive efficiency and innovation in your organization.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/aria_lee.jpg"
  },
  {
    "name": "Lucas Adams",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Data Analysis Models",
    "courseDescription": "Explore various data analysis models and techniques used for analyzing business data and making data-driven decisions.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/lucas_adams.jpg"
  },
  {
    "name": "Ella Hill",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Process Analysis Strategies",
    "courseDescription": "Learn effective strategies for analyzing and improving business processes to drive organizational success.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/ella_hill.jpg"
  },
  {
    "name": "Henry Baker",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Analysis for Product Managers",
    "courseDescription": "Learn how to use business analysis techniques to define product requirements and drive product development.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/henry_baker.jpg"
  },
  {
    "name": "Luna Rodriguez",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Process Analysis Case Studies",
    "courseDescription": "Explore real-world case studies of successful business process analysis projects and learn valuable lessons from them.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/luna_rodriguez.jpg"
  },
  {
    "name": "Owen Nelson",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "Business Analysis for Non-Profit Organizations",
    "courseDescription": "Learn how to apply business analysis techniques to non-profit organizations to drive social impact and achieve mission objectives.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/owen_nelson.jpg"
  },
  {
    "name": "Isabella Perez",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "Business Process Analysis Workshop",
    "courseDescription": "Participate in interactive workshops to learn practical techniques for analyzing and optimizing business processes.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/isabella_perez.jpg"
  },
  {
    "name": "Ethan Kim",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Customer Experience",
    "courseDescription": "Learn how AI is revolutionizing customer experience management and discover strategies for implementing AI-driven CX solutions.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/ethan_kim.jpg"
  },
  {
    "name": "Olivia Chang",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI in Human Resources",
    "courseDescription": "Explore how AI is reshaping HR functions and learn how to leverage AI technologies to enhance talent acquisition and management.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/olivia_chang.jpg"
  },
  {
    "name": "Daniel Park",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Marketing Strategies",
    "courseDescription": "Discover how AI is revolutionizing marketing and learn how to develop AI-driven marketing strategies to drive business growth.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/daniel_park.jpg"
  },
  {
    "name": "Sophie Nguyen",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI in Supply Chain Management",
    "courseDescription": "Learn how AI technologies are optimizing supply chain processes and discover how to implement AI-driven SCM solutions.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/sophie_nguyen.jpg"
  },
  {
    "name": "Adam Chen",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Financial Analysis",
    "courseDescription": "Explore how AI is transforming financial analysis and learn how to leverage AI technologies to make better financial decisions.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/adam_chen.jpg"
  },
  {
    "name": "Lily Kim",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI for Business Automation",
    "courseDescription": "Discover how AI is automating business processes and learn how to implement AI-driven automation solutions to improve efficiency.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/lily_kim.jpg"
  },
  {
    "name": "William Liu",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Sales Strategies",
    "courseDescription": "Learn how AI is revolutionizing sales and discover strategies for implementing AI-driven sales strategies to drive revenue growth.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/william_liu.jpg"
  },
  {
    "name": "Ella Patel",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI in Business Analytics",
    "courseDescription": "Explore how AI is transforming business analytics and learn how to leverage AI technologies to gain actionable insights.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/ella_patel.jpg"
  },
  {
    "name": "Lucas Nguyen",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Product Development",
    "courseDescription": "Discover how AI is revolutionizing product development and learn how to implement AI-driven approaches to innovate products.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/lucas_nguyen.jpg"
  },
  {
    "name": "Aria Chang",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI in Risk Management",
    "courseDescription": "Learn how AI is enhancing risk management practices and discover how to leverage AI technologies to mitigate business risks.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/aria_chang.jpg"
  },
  {
    "name": "James Park",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Business Intelligence",
    "courseDescription": "Explore how AI is revolutionizing business intelligence and learn how to leverage AI technologies to drive data-driven decision-making.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/james_park.jpg"
  },
  {
    "name": "Eva Chen",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI in Project Management",
    "courseDescription": "Discover how AI is transforming project management practices and learn how to leverage AI technologies to streamline project workflows.",
    "ratings": 5,
    "price": 1400,
    "imageUrl": "https://example.com/eva_chen.jpg"
  },
  {
    "name": "Ryan Kim",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Business Process Optimization",
    "courseDescription": "Learn how AI is optimizing business processes and discover strategies for implementing AI-driven process optimization solutions.",
    "ratings": 4,
    "price": 1200,
    "imageUrl": "https://example.com/ryan_kim.jpg"
  },
  {
    "name": "Emma Patel",
    "isVerifiedExpert": true,
    "businessOnlineCourseTitle": "AI in Talent Management",
    "courseDescription": "Explore how AI is revolutionizing talent management practices and learn how to leverage AI technologies to attract and retain top talent.",
    "ratings": 5,
    "price": 1500,
    "imageUrl": "https://example.com/emma_patel.jpg"
  },
  {
    "name": "Nathan Nguyen",
    "isVerifiedExpert": false,
    "businessOnlineCourseTitle": "AI-Powered Customer Insights",
    "courseDescription": "Discover how AI is transforming customer insights and learn how to leverage AI technologies to gain deeper customer understanding.",
    "ratings": 4,
    "price": 1100,
    "imageUrl": "https://example.com/nathan_nguyen.jpg"
  },
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
      },
      {
        "name": "Sofia Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Advanced Investment Risk Management",
        "courseDescription": "Dive deep into advanced techniques and strategies for managing investment risks effectively and optimizing portfolio performance.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/sofia_fernandez.jpg"
      },
      {
        "name": "Mateo Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Introduction to Business Management",
        "courseDescription": "Gain a foundational understanding of business management principles and practices to lead teams and drive organizational success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/mateo_gomez.jpg"
      },
      {
        "name": "Valentina Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategic Investment Planning",
        "courseDescription": "Learn how to develop and implement strategic investment plans to achieve financial goals while effectively managing risks.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/valentina_hernandez.jpg"
      },
      {
        "name": "Diego Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Business Risk Assessment and Mitigation",
        "courseDescription": "Discover techniques for assessing and mitigating various business risks to protect assets and sustain long-term growth.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/diego_ramirez.jpg"
      },
      {
        "name": "Isabella Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Investment Portfolio Management",
        "courseDescription": "Master the art and science of managing investment portfolios to optimize returns while minimizing risks.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/isabella_gomez.jpg"
      },
      {
        "name": "Javier Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Effective Business Leadership",
        "courseDescription": "Learn essential leadership skills and strategies to inspire and guide your team to achieve business objectives.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/javier_hernandez.jpg"
      },
      {
        "name": "Valeria Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Risk Management Strategies",
        "courseDescription": "Explore advanced financial risk management strategies to mitigate risks and optimize financial performance.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/valeria_ramirez.jpg"
      },
      {
        "name": "Lucas Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Business Planning",
        "courseDescription": "Learn how to develop comprehensive strategic business plans to guide decision-making and achieve business objectives.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/lucas_fernandez.jpg"
      },
      {
        "name": "Elena Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Asset Allocation Strategies",
        "courseDescription": "Gain insights into effective asset allocation strategies to diversify investment portfolios and manage risk.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/elena_gomez.jpg"
      },
      {
        "name": "Andres Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Risk Management in Entrepreneurship",
        "courseDescription": "Learn how to identify, assess, and mitigate risks associated with starting and growing a business.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/andres_ramirez.jpg"
      },
      {
        "name": "Camila Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Investment Analysis and Valuation",
        "courseDescription": "Master the fundamentals of investment analysis and valuation techniques to make informed investment decisions.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/camila_hernandez.jpg"
      },
      {
        "name": "Luisa Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Risk Management",
        "courseDescription": "Explore strategic risk management principles and frameworks to identify and mitigate risks proactively.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/luisa_ramirez.jpg"
      },
      {
        "name": "Carlos Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Financial Modeling for Investment Analysis",
        "courseDescription": "Learn how to build and analyze financial models to evaluate investment opportunities and make data-driven decisions.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/carlos_gomez.jpg"
      },
      {
        "name": "Maria Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Operational Risk Management",
        "courseDescription": "Gain a comprehensive understanding of operational risk management and learn how to implement effective risk mitigation strategies.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/maria_hernandez.jpg"
      },
      {
        "name": "Diego Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Strategies for Business Growth",
        "courseDescription": "Discover strategies and tactics for driving sustainable business growth while effectively managing associated risks.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/diego_fernandez.jpg"
      },
      {
        "name": "Ana Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Risk Management in Supply Chain",
        "courseDescription": "Learn how to identify, assess, and mitigate risks in supply chain operations to ensure continuity and resilience.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/ana_ramirez.jpg"
      },
      {
        "name": "Jorge Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Portfolio Risk Management",
        "courseDescription": "Explore advanced portfolio risk management techniques to optimize risk-return trade-offs and enhance portfolio performance.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/jorge_gomez.jpg"
      },
      {
        "name": "Valentina Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Entrepreneurial Finance",
        "courseDescription": "Learn how to manage financial resources effectively and make strategic financial decisions to support business growth.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/valentina_fernandez.jpg"
      },
      {
        "name": "Julian Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Investment Risk Assessment",
        "courseDescription": "Learn how to assess various types of investment risks and develop risk management strategies to protect investment portfolios.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/julian_ramirez.jpg"
      },
      {
        "name": "Isabel Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Crisis Management in Business",
        "courseDescription": "Discover effective strategies for crisis management to mitigate risks, protect reputation, and ensure business continuity.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/isabel_gomez.jpg"
      },
      {
        "name": "Gabriela Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "International Business Expansion Strategies",
        "courseDescription": "Learn strategies and tactics for expanding business operations globally while effectively managing associated risks.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/gabriela_ramirez.jpg"
      },
      {
        "name": "Andres Fernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Financial Risk Analysis",
        "courseDescription": "Gain expertise in analyzing financial risks and develop strategies to mitigate risks and protect assets.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/andres_fernandez.jpg"
      },
      {
        "name": "Liliana Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Value Investing Strategies",
        "courseDescription": "Discover value investing principles and strategies to identify undervalued assets and achieve long-term investment success.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/liliana_gomez.jpg"
      },
      {
        "name": "Juan Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Enterprise Risk Management",
        "courseDescription": "Learn how to implement comprehensive enterprise risk management frameworks to identify, assess, and mitigate risks.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/juan_hernandez.jpg"
      },
      {
        "name": "Carmen Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Business Continuity Planning",
        "courseDescription": "Develop business continuity plans to mitigate risks, maintain operations, and ensure resilience in the face of disruptions.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/carmen_ramirez.jpg"
      },
      {
        "name": "Alejandro Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Quantitative Investment Analysis",
        "courseDescription": "Master quantitative analysis techniques to evaluate investment opportunities and make data-driven investment decisions.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/alejandro_gomez.jpg"
      },
      {
        "name": "Daniela Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Risk Management in Real Estate Investment",
        "courseDescription": "Learn how to assess and mitigate risks in real estate investment projects to maximize returns and minimize losses.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/daniela_hernandez.jpg"
      },
      {
        "name": "Hector Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Cost Management",
        "courseDescription": "Discover strategies for managing costs effectively to improve profitability and gain a competitive edge in the market.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/hector_ramirez.jpg"
      },
      {
        "name": "Eva Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Risk Assessment in Investment Banking",
        "courseDescription": "Gain insights into risk assessment techniques and practices specific to the investment banking industry.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/eva_gomez.jpg"
      },
      {
        "name": "Raul Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Leadership for Risk Management",
        "courseDescription": "Develop strategic leadership skills to effectively manage risks and drive organizational resilience and success.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/raul_hernandez.jpg"
      },
      {
        "name": "Ana Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Investment Risk Modeling",
        "courseDescription": "Learn how to build and analyze investment risk models to assess risk exposure and inform investment decisions.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/ana_gomez.jpg"
      },
      {
        "name": "Martin Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Business Risk Analysis",
        "courseDescription": "Develop skills in strategic business risk analysis to identify and mitigate risks that impact organizational objectives.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/martin_ramirez.jpg"
      },
      {
        "name": "Lorena Fernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Risk Management in Financial Institutions",
        "courseDescription": "Explore risk management practices specific to financial institutions, including banks, insurance companies, and investment firms.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/lorena_fernandez.jpg"
      },
      {
        "name": "Pablo Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Marketing Risk Analysis",
        "courseDescription": "Learn how to assess and mitigate marketing risks to ensure the success of marketing campaigns and initiatives.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/pablo_gomez.jpg"
      },
      {
        "name": "Laura Ramirez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Enterprise Risk Governance",
        "courseDescription": "Understand the principles and best practices of enterprise risk governance to enhance risk oversight and decision-making.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/laura_ramirez.jpg"
      },
      {
        "name": "Felipe Hernandez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Operational Risk Assessment",
        "courseDescription": "Learn how to identify, assess, and mitigate operational risks to ensure operational resilience and business continuity.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/felipe_hernandez.jpg"
      },
      {
        "name": "Natalia Gomez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Investment Risk Management Frameworks",
        "courseDescription": "Explore different investment risk management frameworks and methodologies to effectively manage investment risks.",
        "ratings": 5,
        "price": 1400,
        "imageUrl": "https://example.com/natalia_gomez.jpg"
      },
      {
        "name": "Roberto Ramirez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Supply Chain Risk Management",
        "courseDescription": "Learn how to identify, assess, and mitigate risks in supply chain operations to ensure supply chain resilience.",
        "ratings": 4,
        "price": 1200,
        "imageUrl": "https://example.com/roberto_ramirez.jpg"
      },
      {
        "name": "Sara Hernandez",
        "isVerifiedExpert": true,
        "businessOnlineCourseTitle": "Investment Risk Assessment Models",
        "courseDescription": "Learn how to develop and apply investment risk assessment models to quantify and manage investment risks.",
        "ratings": 5,
        "price": 1500,
        "imageUrl": "https://example.com/sara_hernandez.jpg"
      },
      {
        "name": "Fernando Gomez",
        "isVerifiedExpert": false,
        "businessOnlineCourseTitle": "Strategic Financial Risk Management",
        "courseDescription": "Develop strategies for identifying, assessing, and managing financial risks to achieve financial objectives.",
        "ratings": 4,
        "price": 1100,
        "imageUrl": "https://example.com/fernando_gomez.jpg"
      },
      
]


module.exports = courses