import { ConceptLevel } from '../types/concept.types';
import { advancedConcepts } from './concepts/advanced_concepts';
import { basicConcepts } from './concepts/basic_concepts';
import { intermediateConcepts } from './concepts/intermediate_concepts';

export const CONCEPTS_DATA: ConceptLevel[] = [
  basicConcepts,
  intermediateConcepts,
  advancedConcepts
];