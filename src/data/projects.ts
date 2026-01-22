// Project categories configuration
// To add new images:
// 1. Add the image file to the corresponding folder in public/designs/[category-folder]/
// 2. Add the filename to the images array below

export interface ProjectCategory {
  name: string;
  folder: string;
  images: { filename: string; title: string }[];
}

export const projectCategories: ProjectCategory[] = [
  {
    name: 'Event Design',
    folder: 'event-design',
    images: [
      { filename: '1.webp', title: 'All Souls Day' },
      { filename: '6.webp', title: 'Tournament Winner' },
    ],
  },
  {
    name: 'Social Media',
    folder: 'social-media',
    images: [
      { filename: '2.webp', title: 'Halloween Costume Winner' },
      { filename: '3.webp', title: 'Halloween Facebook Posting' },
      { filename: '4.webp', title: 'Facebook Posting' },
    ],
  },
  {
    name: 'Print Design',
    folder: 'print-design',
    images: [
      { filename: '5.webp', title: 'Rides Passes' },
    ],
  },
  {
    name: 'Marketing',
    folder: 'marketing',
    images: [
      { filename: '7.webp', title: 'Promotional Post' },
      { filename: '8.webp', title: 'Birthday Promos' },
    ],
  },
];

// Helper function to get all projects as a flat array
export const getAllProjects = () => {
  return projectCategories.flatMap((category) =>
    category.images.map((image) => ({
      image: `/designs/${category.folder}/${image.filename}`,
      title: image.title,
      category: category.name,
    }))
  );
};

// Helper function to get projects by category
export const getProjectsByCategory = (categoryName: string) => {
  const category = projectCategories.find((c) => c.name === categoryName);
  if (!category) return [];

  return category.images.map((image) => ({
    image: `/designs/${category.folder}/${image.filename}`,
    title: image.title,
    category: category.name,
  }));
};
