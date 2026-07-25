import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export type ConceptDifficulty = 'basic' | 'intermediate' | 'advanced';

export interface ConceptItem {
  id: string;
  title: string;
  description: string;
  codeExample?: string;
  completed?: boolean;
}

export interface ConceptLevel {
  id: ConceptDifficulty;
  title: string;
  iconName: ComponentProps<typeof Ionicons>['name']; 
  description: string;
  items: ConceptItem[];
}