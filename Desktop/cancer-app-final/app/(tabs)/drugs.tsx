import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Pill, Calendar, CircleCheck as CheckCircle, Clock } from 'lucide-react-native';

const newDrugs = [
  {
    name: 'Pembrolizumab (Keytruda)',
    type: 'Immunotherapy',
    indication: 'Various solid tumors',
    approvalDate: '2024',
    status: 'FDA Approved',
    description: 'PD-1 inhibitor that helps the immune system fight cancer cells more effectively.',
    benefits: 'Shown to improve overall survival in multiple cancer types',
  },
  {
    name: 'CAR-T Cell Therapy',
    type: 'Cell Therapy',
    indication: 'Blood cancers',
    approvalDate: '2024',
    status: 'FDA Approved',
    description: 'Genetically modified T-cells that specifically target cancer cells.',
    benefits: 'High response rates in previously treatment-resistant cases',
  },
  {
    name: 'Trastuzumab deruxtecan',
    type: 'Antibody-drug conjugate',
    indication: 'HER2+ breast cancer',
    approvalDate: '2024',
    status: 'FDA Approved',
    description: 'Targeted therapy that delivers chemotherapy directly to cancer cells.',
    benefits: 'Improved progression-free survival with manageable side effects',
  },
  {
    name: 'Sotorasib (Lumakras)',
    type: 'Targeted therapy',
    indication: 'KRAS G12C mutated NSCLC',
    approvalDate: '2024',
    status: 'FDA Approved',
    description: 'First KRAS G12C inhibitor for lung cancer treatment.',
    benefits: 'Targets previously "undruggable" KRAS mutations',
  },
  {
    name: 'Dostarlimab',
    type: 'Immunotherapy',
    indication: 'Mismatch repair deficient cancers',
    approvalDate: '2024',
    status: 'FDA Approved',
    description: 'PD-1 inhibitor showing remarkable results in specific genetic subtypes.',
    benefits: 'Complete response in 100% of patients in clinical trials',
  },
];

const upcomingDrugs = [
  {
    name: 'Bispecific T-cell engagers',
    type: 'Immunotherapy',
    indication: 'Various solid tumors',
    status: 'Phase III trials',
    description: 'Novel approach to engage T-cells directly with cancer cells.',
  },
  {
    name: 'Next-generation CDK4/6 inhibitors',
    type: 'Targeted therapy',
    indication: 'Hormone-positive breast cancer',
    status: 'Phase II trials',
    description: 'Improved selectivity and reduced side effects.',
  },
  {
    name: 'Oncolytic virus therapy',
    type: 'Viral therapy',
    indication: 'Solid tumors',
    status: 'Phase II trials',
    description: 'Engineered viruses that selectively kill cancer cells.',
  },
];

export default function DrugsTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Drug Developments</Text>
        <Text style={styles.headerSubtitle}>
          Latest approved therapies and upcoming treatments
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Approved Drugs</Text>
          
          {newDrugs.map((drug, index) => (
            <View key={index} style={styles.drugCard}>
              <View style={styles.drugHeader}>
                <View style={styles.drugIcon}>
                  <Pill size={24} color="#14B8A6" />
                </View>
                <View style={styles.drugBasicInfo}>
                  <Text style={styles.drugName}>{drug.name}</Text>
                  <Text style={styles.drugType}>{drug.type}</Text>
                </View>
                <View style={styles.statusBadge}>
                  <CheckCircle size={16} color="#10B981" />
                  <Text style={styles.statusText}>Approved</Text>
                </View>
              </View>

              <View style={styles.drugDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Indication:</Text>
                  <Text style={styles.detailValue}>{drug.indication}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Approval:</Text>
                  <Text style={styles.detailValue}>{drug.approvalDate}</Text>
                </View>
              </View>

              <Text style={styles.drugDescription}>{drug.description}</Text>
              
              <View style={styles.benefitsSection}>
                <Text style={styles.benefitsLabel}>Key Benefits:</Text>
                <Text style={styles.benefitsText}>{drug.benefits}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Drugs in Development</Text>
          
          {upcomingDrugs.map((drug, index) => (
            <View key={index} style={styles.upcomingCard}>
              <View style={styles.drugHeader}>
                <View style={styles.upcomingIcon}>
                  <Clock size={24} color="#F97316" />
                </View>
                <View style={styles.drugBasicInfo}>
                  <Text style={styles.drugName}>{drug.name}</Text>
                  <Text style={styles.drugType}>{drug.type}</Text>
                </View>
                <View style={styles.pendingBadge}>
                  <Clock size={16} color="#F97316" />
                  <Text style={styles.pendingText}>In Trials</Text>
                </View>
              </View>

              <View style={styles.drugDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Indication:</Text>
                  <Text style={styles.detailValue}>{drug.indication}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Status:</Text>
                  <Text style={styles.detailValue}>{drug.status}</Text>
                </View>
              </View>

              <Text style={styles.drugDescription}>{drug.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.disclaimerCard}>
          <Text style={styles.disclaimerTitle}>Important Note</Text>
          <Text style={styles.disclaimerText}>
            This information is for educational purposes only. Always consult with qualified 
            healthcare professionals before making any treatment decisions. Drug availability 
            and approval status may vary by region.
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  drugCard: {
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
  upcomingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#F97316',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  drugHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  drugIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0FDFA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  upcomingIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FEF7ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  drugBasicInfo: {
    flex: 1,
  },
  drugName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  drugType: {
    fontSize: 14,
    color: '#64748B',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#10B981',
    marginLeft: 4,
  },
  pendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF7ED',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  pendingText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#F97316',
    marginLeft: 4,
  },
  drugDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
    width: 80,
  },
  detailValue: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
  },
  drugDescription: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginBottom: 12,
  },
  benefitsSection: {
    backgroundColor: '#F0FDF4',
    borderRadius: 8,
    padding: 12,
  },
  benefitsLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
    marginBottom: 4,
  },
  benefitsText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  disclaimerCard: {
    backgroundColor: '#FEF7ED',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  disclaimerText: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
});