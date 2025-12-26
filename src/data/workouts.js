export const workoutCategories = [
  {
    id: "legs",
    name: "Legs",
    image: "/images/leg.png"
  },
  {
    id: "abs",
    name: "Abs",
    image: "/images/abs.png"
  },
  {
    id: "arms",
    name: "Arms",
    image: "/images/arm.png"
  },
  {
    id: "shoulder",
    name: "Shoulder",
    image: "/images/shoulder.png"
  },
  {
    id: "back",
    name: "Back",
    image: "/images/back.png"
  },
  {
    id: "chest",
    name: "Chest",
    image: "/images/chest.png"
  }
];

export const workouts = {
  legs: [
    {
      id: 1,
      name: "Squats",
      description: "Build strength in quads, glutes, and hamstrings",
      level: "Beginner",
      image: "/images/squats.jpg"
    },
    {
      id: 2,
      name: "Lunges",
      description: "Improve balance and leg definition",
      level: "Intermediate",
      image: "/images/lunges.jpg"
    }
  ],

  abs: [
    {
      id: 1,
      name: "Crunches",
      description: "Core strengthening exercise",
      level: "Beginner",
      image: "/images/crunches.jpg"
    }
  ],

  arms: [
    {
      id: 1,
      name: "Bicep Curls",
      description: "Increase arm strength",
      level: "Beginner",
      image: "/images/bicep.jpg"
    }
  ],

  shoulder: [
    {
      id: 1,
      name: "Shoulder Press",
      description: "Build shoulder mass",
      level: "Intermediate",
      image: "/images/shoulder-press.jpg"
    }
  ],

  back: [
    {
      id: 1,
      name: "Pull Ups",
      description: "Strengthen upper back",
      level: "Advanced",
      image: "/images/pullups.jpg"
    }
  ],

  chest: [
    {
      id: 1,
      name: "Bench Press",
      description: "Classic chest builder",
      level: "Intermediate",
      image: "/images/bench.jpg"
    }
  ]
};
