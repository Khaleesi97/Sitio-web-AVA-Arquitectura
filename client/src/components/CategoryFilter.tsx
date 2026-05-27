import { categories } from "@/data/projects";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category === "Todos" ? "" : category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            (category === "Todos" && activeCategory === "") ||
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg scale-105"
              : "bg-secondary/20 text-foreground hover:bg-secondary/40 border border-border"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
