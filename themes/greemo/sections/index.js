// Greemo template names used in content/*.md, mapped to the section blocks that render them.
import Hero from './hero/component.vue'
import PageHero from './page-hero/component.vue'
import KeyFeatures from './key-features/component.vue'
import AiSurfaces from './ai-surfaces/component.vue'
import FeatureTeaser from './feature-teaser/component.vue'
import CtaBand from './cta-band/component.vue'
import FeatureRows from './feature-rows/component.vue'
import FeatureSingle from './feature-row/component.vue'
import Flow from './flow/component.vue'
import CardGrid from './card-grid/component.vue'
import SplitCode from './split-code/component.vue'
import CliReference from './cli-reference/component.vue'
import ApiReference from './api-reference/component.vue'
import FrameworkCards from './framework-cards/component.vue'
import SectionsLibrary from './sections-library/component.vue'
import CaseStudy from './case-study/component.vue'
import Pricing from './pricing/component.vue'
import Steps from './steps/component.vue'
import CodeCards from './code-cards/component.vue'
import Contact from './contact/component.vue'

export const sections = {
  hero: Hero,
  'page-hero': PageHero,
  'key-features': KeyFeatures,
  'ai-surfaces': AiSurfaces,
  'feature-teaser': FeatureTeaser,
  'cta-band': CtaBand,
  'feature-rows': FeatureRows,
  'feature-row': FeatureSingle,
  flow: Flow,
  'card-grid': CardGrid,
  'split-code': SplitCode,
  'cli-reference': CliReference,
  'api-reference': ApiReference,
  'framework-cards': FrameworkCards,
  'sections-library': SectionsLibrary,
  'case-study': CaseStudy,
  pricing: Pricing,
  steps: Steps,
  'code-cards': CodeCards,
  contact: Contact
}

export default sections
