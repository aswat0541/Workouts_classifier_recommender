// Auto-generated decision tree
const decisionTree = {
  "feature": "Calories_Burned",
  "threshold": 899.0,
  "left": {
    "feature": "Calories_Burned",
    "threshold": 602.0,
    "left": {
      "feature": "Calories_Burned",
      "threshold": 398.0,
      "left": {
        "class": "Yoga"
      },
      "right": {
        "feature": "Fat_Percentage",
        "threshold": 34.60000038146973,
        "left": {
          "class": "Cardio"
        },
        "right": {
          "class": "Cardio"
        }
      }
    },
    "right": {
      "feature": "Weight (kg)",
      "threshold": 40.79999923706055,
      "left": {
        "class": "Strength"
      },
      "right": {
        "feature": "BMI",
        "threshold": 48.07500076293945,
        "left": {
          "feature": "Height (m)",
          "threshold": 1.9249999523162842,
          "left": {
            "feature": "BMI",
            "threshold": 43.25,
            "left": {
              "feature": "Height (m)",
              "threshold": 1.5049999952316284,
              "left": {
                "class": "Strength"
              },
              "right": {
                "feature": "Max_BPM",
                "threshold": 169.5,
                "left": {
                  "class": "Strength"
                },
                "right": {
                  "class": "Strength"
                }
              }
            },
            "right": {
              "class": "Strength"
            }
          },
          "right": {
            "feature": "Avg_BPM",
            "threshold": 164.5,
            "left": {
              "feature": "Age",
              "threshold": 56.5,
              "left": {
                "feature": "Max_BPM",
                "threshold": 197.0,
                "left": {
                  "class": "Strength"
                },
                "right": {
                  "class": "Yoga"
                }
              },
              "right": {
                "class": "Cardio"
              }
            },
            "right": {
              "class": "HIIT"
            }
          }
        },
        "right": {
          "class": "Cardio"
        }
      }
    }
  },
  "right": {
    "feature": "HR_Burn_Ratio",
    "threshold": 5.826539754867554,
    "left": {
      "class": "HIIT"
    },
    "right": {
      "feature": "Weight (kg)",
      "threshold": 43.64999961853027,
      "left": {
        "class": "Cardio"
      },
      "right": {
        "feature": "Calories_Burned",
        "threshold": 954.5,
        "left": {
          "class": "Cardio"
        },
        "right": {
          "feature": "Max_BPM",
          "threshold": 197.5,
          "left": {
            "feature": "Height (m)",
            "threshold": 1.5549999475479126,
            "left": {
              "feature": "Height (m)",
              "threshold": 1.5449999570846558,
              "left": {
                "feature": "Session_Duration (hours)",
                "threshold": 1.6600000262260437,
                "left": {
                  "class": "HIIT"
                },
                "right": {
                  "class": "HIIT"
                }
              },
              "right": {
                "class": "Cardio"
              }
            },
            "right": {
              "feature": "Calories_Burned",
              "threshold": 963.5,
              "left": {
                "class": "HIIT"
              },
              "right": {
                "feature": "Avg_BPM",
                "threshold": 122.5,
                "left": {
                  "class": "HIIT"
                },
                "right": {
                  "class": "HIIT"
                }
              }
            }
          },
          "right": {
            "feature": "Fat_Percentage",
            "threshold": 13.049999713897705,
            "left": {
              "class": "HIIT"
            },
            "right": {
              "class": "Strength"
            }
          }
        }
      }
    }
  }
};
const workoutTypes = ["Cardio", "HIIT", "Strength", "Yoga"];
