const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const fs = require("node:fs");
const mime = require("mime-types");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: "application/json",
};


  export const GenerateCourseLayout = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Genereate a course tutorial on the following detials with feild as course name ,description,along with chapter name,about,duration in json format",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "course_name": "Data Science Fundamentals",\n  "description": "This course provides a comprehensive introduction to the core concepts and techniques of data science. You will learn how to collect, clean, analyze, and visualize data to extract valuable insights and make data-driven decisions.  The course covers essential tools and methodologies, including Python programming, statistical analysis, machine learning, and data visualization, equipping you with the foundational knowledge and skills necessary to embark on a career in data science or enhance your analytical capabilities in your current role.",\n  "chapters": [\n    {\n      "chapter_name": "Introduction to Data Science",\n      "about": "This chapter provides an overview of the data science field, including its definition, scope, and applications. We\'ll explore the data science workflow, roles of data scientists, and ethical considerations. You will understand the importance of data in today\'s world and how data science empowers organizations to make informed decisions.",\n      "duration": "2 hours",\n      "topics": [\n        "What is Data Science?",\n        "The Data Science Process",\n        "Data Science Roles and Responsibilities",\n        "Applications of Data Science",\n        "Ethical Considerations in Data Science",\n        "Introduction to Big Data"\n      ]\n    },\n    {\n      "chapter_name": "Python for Data Science",\n      "about": "This chapter introduces Python, the most popular programming language for data science. You will learn the basics of Python syntax, data structures, and control flow, along with essential libraries like NumPy and Pandas for data manipulation and analysis. By the end of this chapter, you\'ll be able to write Python code to handle data efficiently.",\n      "duration": "6 hours",\n      "topics": [\n        "Python Installation and Setup",\n        "Python Basics: Variables, Data Types, Operators",\n        "Control Flow: Loops and Conditional Statements",\n        "Functions and Modules",\n        "Introduction to NumPy: Arrays and Numerical Operations",\n        "Introduction to Pandas: DataFrames and Series",\n        "Data Cleaning with Pandas: Handling Missing Values and Duplicates"\n      ]\n    },\n    {\n      "chapter_name": "Data Visualization",\n      "about": "This chapter explores the art and science of data visualization. You will learn how to create compelling and informative charts and graphs using libraries like Matplotlib and Seaborn. We\'ll cover different visualization techniques and principles to effectively communicate insights from your data.",\n      "duration": "4 hours",\n      "topics": [\n        "Principles of Effective Data Visualization",\n        "Introduction to Matplotlib: Creating Basic Plots",\n        "Introduction to Seaborn: Advanced Visualization Techniques",\n        "Creating Different Chart Types: Scatter plots, Line plots, Bar charts, Histograms, Box plots",\n        "Customizing Plots: Labels, Titles, Legends, Colors",\n        "Interactive Visualizations (Introduction)"\n      ]\n    },\n    {\n      "chapter_name": "Statistical Analysis",\n      "about": "This chapter covers fundamental statistical concepts and methods essential for data analysis. You will learn about descriptive statistics, probability distributions, hypothesis testing, and regression analysis. By the end of this chapter, you\'ll be able to apply statistical techniques to gain insights from your data and make statistically sound inferences.",\n      "duration": "8 hours",\n      "topics": [\n        "Descriptive Statistics: Mean, Median, Mode, Standard Deviation",\n        "Probability Distributions: Normal Distribution, Binomial Distribution",\n        "Hypothesis Testing: T-tests, Chi-Square Tests",\n        "Correlation and Regression Analysis",\n        "Confidence Intervals",\n        "Statistical Significance and p-values"\n      ]\n    },\n    {\n      "chapter_name": "Introduction to Machine Learning",\n      "about": "This chapter provides a gentle introduction to machine learning. You will learn about different types of machine learning algorithms, including supervised, unsupervised, and reinforcement learning.  We\'ll focus on popular algorithms like linear regression, logistic regression, and k-means clustering.  You\'ll also learn how to evaluate the performance of machine learning models.",\n      "duration": "8 hours",\n      "topics": [\n        "What is Machine Learning?",\n        "Types of Machine Learning: Supervised, Unsupervised, Reinforcement Learning",\n        "Supervised Learning: Linear Regression, Logistic Regression",\n        "Unsupervised Learning: K-Means Clustering",\n        "Model Evaluation: Accuracy, Precision, Recall, F1-Score",\n        "Overfitting and Underfitting",\n        "Introduction to scikit-learn"\n      ]\n    },\n     {\n      "chapter_name": "Data Cleaning and Preprocessing",\n      "about": "This chapter covers crucial techniques for preparing data for analysis and modeling. You will learn how to handle missing values, remove duplicates, transform data, and perform feature engineering. Clean and well-prepared data is essential for building accurate and reliable data science models.",\n      "duration": "4 hours",\n      "topics": [\n        "Handling Missing Values (Imputation Techniques)",\n        "Removing Duplicate Data",\n        "Data Transformation (Scaling, Normalization)",\n        "Feature Engineering (Creating New Features)",\n        "Data Encoding (One-Hot Encoding, Label Encoding)",\n        "Outlier Detection and Treatment"\n      ]\n    },\n    {\n      "chapter_name": "Project: Data Analysis Case Study",\n      "about": "In this capstone project, you\'ll apply the skills and knowledge you\'ve acquired throughout the course to a real-world data analysis problem. You will collect, clean, analyze, visualize, and interpret data to answer specific questions and draw meaningful conclusions. This project provides valuable hands-on experience and allows you to showcase your data science skills.",\n      "duration": "10 hours",\n      "topics": [\n        "Project Introduction and Data Exploration",\n        "Data Cleaning and Preprocessing",\n        "Exploratory Data Analysis (EDA)",\n        "Statistical Analysis and Hypothesis Testing",\n        "Machine Learning Model Building (if applicable)",\n        "Data Visualization and Interpretation",\n        "Report Writing and Presentation"\n      ]\n    }\n  ]\n}\n```',
          },
        ],
      },
    ],
  });

  //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // TODO: Following code needs to be updated for client-side apps.
  //const candidates = result.response.candidates;
  for (
    let candidate_index = 0;
    candidate_index < candidates.length;
    candidate_index++
  ) {
    for (
      let part_index = 0;
      part_index < candidates[candidate_index].content.parts.length;
      part_index++
    ) {
      const part = candidates[candidate_index].content.parts[part_index];
      if (part.inlineData) {
        try {
          const filename = `output_${candidate_index}_${part_index}.${mime.extension(
            part.inlineData.mimeType
          )}`;
          fs.writeFileSync(
            filename,
            Buffer.from(part.inlineData.data, "base64")
          );
          console.log(`Output written to: ${filename}`);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  console.log(result.response.text());

