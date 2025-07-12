import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { ExternalLink, Calendar, Users } from 'lucide-react-native';

const researchPapers = [
  {
    title: 'Immunotherapy Breakthrough in Lung Cancer Treatment',
    authors: 'Dr. Sarah Johnson, et al.',
    journal: 'Nature Medicine',
    date: '2024',
    summary: 'Recent advances in checkpoint inhibitor therapy showing significant improvement in patient outcomes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
  {
    title: 'Early Detection Methods for Pancreatic Cancer',
    authors: 'Dr. Michael Chen, et al.',
    journal: 'The Lancet',
    date: '2024',
    summary: 'Novel biomarkers and imaging techniques for detecting pancreatic cancer in early stages.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
  {
    title: 'Personalized Medicine in Breast Cancer Treatment',
    authors: 'Dr. Emily Rodriguez, et al.',
    journal: 'Journal of Clinical Oncology',
    date: '2024',
    summary: 'Genomic profiling approaches to customize treatment plans for breast cancer patients.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
  {
    title: 'CAR-T Cell Therapy: Recent Developments',
    authors: 'Dr. David Kim, et al.',
    journal: 'Cell',
    date: '2024',
    summary: 'Advances in chimeric antigen receptor T-cell therapy for hematological malignancies.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
  {
    title: 'Nutrition and Cancer Prevention: Global Study',
    authors: 'Dr. Lisa Wang, et al.',
    journal: 'American Journal of Epidemiology',
    date: '2024',
    summary: 'Large-scale analysis of dietary factors and their impact on cancer risk reduction.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
];

export default function ResearchTab() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Research Papers</Text>
        <Text style={styles.headerSubtitle}>
          Latest scientific findings and research in cancer treatment and prevention
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {researchPapers.map((paper, index) => (
          <View key={index} style={styles.paperCard}>
            <Text style={styles.paperTitle}>{paper.title}</Text>
            
            <View style={styles.paperMeta}>
              <View style={styles.metaItem}>
                <Users size={16} color="#64748B" />
                <Text style={styles.metaText}>{paper.authors}</Text>
              </View>
              <View style={styles.metaItem}>
                <Calendar size={16} color="#64748B" />
                <Text style={styles.metaText}>{paper.journal} • {paper.date}</Text>
              </View>
            </View>

            <Text style={styles.paperSummary}>{paper.summary}</Text>

            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => openLink(paper.link)}>
              <ExternalLink size={16} color="#14B8A6" />
              <Text style={styles.linkText}>Read Full Paper</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Papers are sourced from peer-reviewed journals and research institutions. 
            Always consult healthcare professionals for medical advice.
          </Text>
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
  paperCard: {
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
  paperTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
    lineHeight: 24,
  },
  paperMeta: {
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
  paperSummary: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginBottom: 16,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#14B8A6',
    marginLeft: 8,
  },
  footer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },
});