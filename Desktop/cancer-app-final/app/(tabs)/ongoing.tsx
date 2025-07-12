import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { FlaskConical, Users, MapPin, ExternalLink, Calendar } from 'lucide-react-native';

const ongoingResearch = [
  {
    title: 'Liquid Biopsy for Early Cancer Detection',
    institution: 'Johns Hopkins University',
    location: 'Baltimore, MD',
    phase: 'Phase II',
    participants: '500 participants',
    description: 'Developing blood tests that can detect circulating tumor DNA to identify cancer at its earliest stages.',
    focus: 'Early detection across multiple cancer types',
    link: 'https://clinicaltrials.gov/',
  },
  {
    title: 'Personalized Cancer Vaccines',
    institution: 'Memorial Sloan Kettering',
    location: 'New York, NY',
    phase: 'Phase I/II',
    participants: '120 participants',
    description: 'Creating personalized vaccines based on individual tumor genetics to stimulate immune response.',
    focus: 'Melanoma and breast cancer',
    link: 'https://clinicaltrials.gov/',
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    institution: 'Stanford Medicine',
    location: 'Stanford, CA',
    phase: 'Preclinical',
    participants: 'N/A',
    description: 'Using artificial intelligence to accelerate the discovery of new cancer therapies.',
    focus: 'Drug discovery and development',
    link: 'https://clinicaltrials.gov/',
  },
  {
    title: 'Combination Immunotherapy Trial',
    institution: 'MD Anderson Cancer Center',
    location: 'Houston, TX',
    phase: 'Phase III',
    participants: '800 participants',
    description: 'Testing combinations of checkpoint inhibitors with novel immune modulators.',
    focus: 'Advanced solid tumors',
    link: 'https://clinicaltrials.gov/',
  },
  {
    title: 'Precision Radiation Therapy',
    institution: 'Mayo Clinic',
    location: 'Rochester, MN',
    phase: 'Phase II',
    participants: '200 participants',
    description: 'Developing ultra-precise radiation delivery systems to minimize damage to healthy tissue.',
    focus: 'Brain and spinal tumors',
    link: 'https://clinicaltrials.gov/',
  },
  {
    title: 'Microbiome and Cancer Therapy',
    institution: 'University of Chicago',
    location: 'Chicago, IL',
    phase: 'Phase I',
    participants: '80 participants',
    description: 'Investigating how gut microbiome affects cancer treatment response and toxicity.',
    focus: 'Colorectal and pancreatic cancer',
    link: 'https://clinicaltrials.gov/',
  },
];

const researchAreas = [
  {
    title: 'Immunotherapy',
    description: 'Harnessing the body\'s immune system to fight cancer',
    projects: 45,
  },
  {
    title: 'Precision Medicine',
    description: 'Tailoring treatments based on genetic profiles',
    projects: 32,
  },
  {
    title: 'Early Detection',
    description: 'Developing better screening and diagnostic tools',
    projects: 28,
  },
  {
    title: 'Drug Resistance',
    description: 'Understanding and overcoming treatment resistance',
    projects: 23,
  },
];

export default function OngoingTab() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ongoing Research</Text>
        <Text style={styles.headerSubtitle}>
          Current studies and clinical trials advancing cancer treatment
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Research Areas</Text>
          <View style={styles.areasGrid}>
            {researchAreas.map((area, index) => (
              <View key={index} style={styles.areaCard}>
                <Text style={styles.areaTitle}>{area.title}</Text>
                <Text style={styles.areaDescription}>{area.description}</Text>
                <Text style={styles.areaProjects}>{area.projects} active projects</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Clinical Trials</Text>
          
          {ongoingResearch.map((study, index) => (
            <View key={index} style={styles.studyCard}>
              <View style={styles.studyHeader}>
                <View style={styles.studyIcon}>
                  <FlaskConical size={24} color="#3B82F6" />
                </View>
                <View style={styles.studyBasicInfo}>
                  <Text style={styles.studyTitle}>{study.title}</Text>
                  <Text style={styles.studyInstitution}>{study.institution}</Text>
                </View>
              </View>

              <View style={styles.studyMeta}>
                <View style={styles.metaItem}>
                  <MapPin size={16} color="#64748B" />
                  <Text style={styles.metaText}>{study.location}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Calendar size={16} color="#64748B" />
                  <Text style={styles.metaText}>{study.phase}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Users size={16} color="#64748B" />
                  <Text style={styles.metaText}>{study.participants}</Text>
                </View>
              </View>

              <Text style={styles.studyDescription}>{study.description}</Text>

              <View style={styles.focusSection}>
                <Text style={styles.focusLabel}>Research Focus:</Text>
                <Text style={styles.focusText}>{study.focus}</Text>
              </View>

              <TouchableOpacity
                style={styles.linkButton}
                onPress={() => openLink(study.link)}>
                <ExternalLink size={16} color="#3B82F6" />
                <Text style={styles.linkText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.participationCard}>
          <Text style={styles.participationTitle}>Interested in Participating?</Text>
          <Text style={styles.participationText}>
            Clinical trials are essential for advancing cancer treatment. If you're interested 
            in participating in research studies, consult with your healthcare team and visit 
            ClinicalTrials.gov to find trials that may be suitable for you.
          </Text>
          <TouchableOpacity
            style={styles.participationButton}
            onPress={() => openLink('https://clinicaltrials.gov/')}>
            <Text style={styles.participationButtonText}>Find Clinical Trials</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  areasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  areaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  areaTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 6,
  },
  areaDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 18,
    marginBottom: 8,
  },
  areaProjects: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3B82F6',
  },
  studyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  studyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  studyIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  studyBasicInfo: {
    flex: 1,
  },
  studyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
    lineHeight: 22,
  },
  studyInstitution: {
    fontSize: 14,
    color: '#64748B',
  },
  studyMeta: {
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 8,
  },
  studyDescription: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginBottom: 12,
  },
  focusSection: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  focusLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
    marginBottom: 4,
  },
  focusText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3B82F6',
    marginLeft: 8,
  },
  participationCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  participationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  participationText: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginBottom: 16,
  },
  participationButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  participationButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});