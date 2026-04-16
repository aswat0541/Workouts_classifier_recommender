# 🏋️ Gym Exercise Classification & Workout Recommender

## 📌 Overview

This project is a **Machine Learning and Deep Learning-based system** that predicts the optimal workout type (**Cardio, HIIT, Strength, Yoga**) based on user health data. It also provides tailored workout recommendations to help users achieve their fitness goals safely and effectively.

🔗 **Live Demo:** [https://aswat0541.github.io/Workouts_classifier_recommender/](https://aswat0541.github.io/Workouts_classifier_recommender/)

---

## 🎯 Problem Statement

Many individuals perform exercises that are incompatible with their health conditions, leading to injury or poor results. Generic workout plans ignore individual physiological parameters such as age, BMI, heart rate, and past performance.

This project aims to:
- Predict the most suitable **workout type** (Cardio, HIIT, Strength, Yoga) based on user data.
- Provide **personalized exercise recommendations** for the predicted workout type.
- Improve workout safety and effectiveness through data-driven personalization.

---

## 📊 Dataset

- **Source:** Synthetic gym session data (`gym_data.csv`)
- **Size:** 973 records, 15 features
- **Features:**
  - Age, Gender, Weight (kg), Height (m)
  - Max_BPM, Avg_BPM, Resting_BPM
  - Session_Duration (hours), Calories_Burned
  - Fat_Percentage, Water_Intake (liters)
  - Workout_Frequency (days/week), BMI
- **Engineered Features:** `BMI_Class`, `HR_Burn_Ratio`, `Gender_Code`
- **Target Variable:** `Workout_Type` (Cardio, HIIT, Strength, Yoga)

---

## 🤖 Models Used

### Machine Learning (Scikit-learn)
- **Decision Tree** (best model: 92.3% accuracy)
- Random Forest, Logistic Regression, SVM, KNN
- Hyperparameter tuning via GridSearchCV (5-fold cross-validation)
- Class imbalance handled with `class_weight='balanced'`

### Deep Learning (TensorFlow/Keras)
- 3-layer Feedforward Neural Network: 128 → 64 → 32 neurons
- Activation: ReLU (hidden), Softmax (output)
- Optimisation techniques:
  - **Dropout (0.3)** – reduces overfitting
  - **BatchNormalisation** – stabilises training
  - **EarlyStopping (patience=10)** – prevents overfitting
  - **ReduceLROnPlateau (factor=0.5, patience=5)** – adaptive learning rate

---

## 📈 Performance Comparison

| Model                  | Accuracy | Precision | Recall | F1 Score |
|------------------------|----------|-----------|--------|----------|
| Decision Tree          | **0.9231** | 0.9350    | 0.9231 | 0.9220   |
| Random Forest          | 0.8821   | 0.8823    | 0.8821 | 0.8819   |
| SVM                    | 0.8667   | 0.8670    | 0.8667 | 0.8667   |
| Logistic Regression    | 0.8513   | 0.8595    | 0.8513 | 0.8508   |
| Deep Learning (NN)     | 0.8462   | 0.8471    | 0.8462 | 0.8462   |
| KNN                    | 0.8410   | 0.8416    | 0.8410 | 0.8406   |

✅ **Decision Tree** achieved the highest accuracy (92.3%) and is used in the live web predictor.

---

## 🚀 Live Interactive Predictor

You can try the model directly in your browser – no installation required.

👉 **[Click here to predict your workout type](https://aswat0541.github.io/Workouts_classifier_recommender/)**

The predictor:
- Takes user health metrics (age, gender, weight, height, heart rates, calories, duration, etc.)
- Predicts the recommended workout type (Cardio, HIIT, Strength, Yoga)
- Displays a list of specific exercises for that workout type
rkouts_classifier_recommender.git
   cd Workouts_classifier_recommender
