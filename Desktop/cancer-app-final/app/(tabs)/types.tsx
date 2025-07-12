import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Activity, TrendingUp, Users, CircleAlert as AlertCircle } from 'lucide-react-native';

const cancerTypes = [
  {
    name: 'Breast Cancer',
    incidence: '2.3 million new cases annually',
    mortality: '685,000 deaths annually',
    symptoms: ['Breast lump or thickening', 'Changes in breast size or shape', 'Skin dimpling', 'Nipple discharge'],
    riskFactors: ['Age (50+)', 'Family history', 'BRCA mutations', 'Hormone exposure'],
    screeningAge: '40+ years',
  },
  {
    name: 'Lung Cancer',
    incidence: '2.2 million new cases annually',
    mortality: '1.8 million deaths annually',
    symptoms: ['Persistent cough', 'Chest pain', 'Shortness of breath', 'Coughing up blood'],
    riskFactors: ['Smoking', 'Secondhand smoke', 'Radon exposure', 'Air pollution'],
    screeningAge: '50-80 years (high risk)',
  },
  {
    name: 'Colorectal Cancer',
    incidence: '1.9 million new cases annually',
    mortality: '935,000 deaths annually',
    symptoms: ['Changes in bowel habits', 'Blood in stool', 'Abdominal pain', 'Unexplained weight loss'],
    riskFactors: ['Age (50+)', 'Family history', 'Inflammatory bowel disease', 'Diet high in red meat'],
    screeningAge: '45+ years',
  },
  {
    name: 'Prostate Cancer',
    incidence: '1.4 million new cases annually',
    mortality: '375,000 deaths annually',
    symptoms: ['Difficulty urinating', 'Weak urine flow', 'Blood in urine', 'Pelvic discomfort'],
    riskFactors: ['Age (65+)', 'African American ethnicity', 'Family history', 'Obesity'],
    screeningAge: '50+ years (earlier if high risk)',
  },
  {
    name: 'Stomach Cancer',
    incidence: '1.1 million new cases annually',
    mortality: '769,000 deaths annually',
    symptoms: ['Stomach pain', 'Nausea and vomiting', 'Loss of appetite', 'Feeling full quickly'],
    riskFactors: ['H. pylori infection', 'Diet high in salt', 'Smoking', 'Family history'],
    screeningAge: 'Varies by region and risk',
  },
  {
    name: 'Liver Cancer',
    incidence: '906,000 new cases annually',
    mortality: '830,000 deaths annually',
    symptoms: ['Abdominal pain', 'Unexplained weight loss', 'Fatigue', 'Jaundice'],
    riskFactors: ['Hepatitis B/C', 'Cirrhosis', 'Excessive alcohol', 'Diabetes'],
    screeningAge: 'High-risk individuals',
  },
];

export default function TypesTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cancer Types</Text>
        <Text style={styles.headerSubtitle}>
          Understanding major cancer types, symptoms, and risk factors
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {cancerTypes.map((cancer, index) => (
          <View key={index} style={styles.cancerCard}>
            <Text style={styles.cancerName}>{cancer.name}</Text>
            
            <View style={styles.statsSection}>
              <View style={styles.statItem}>
                <View style={styles.statIcon}>
                  <TrendingUp size={20} color="#3B82F6" />
                </View>
                <View style={styles.statContent}>
                  <Text style={styles.statLabel}>Global Incidence</Text>
                  <Text style={styles.statValue}>{cancer.incidence}</Text>
                </View>
              </View>
              
              <View style={styles.statItem}>
                <View style={styles.statIcon}>
                  <Activity size={20} color="#EF4444" />
                </View>
                <View style={styles.statContent}>
                  <Text style={styles.statLabel}>Annual Deaths</Text>
                  <Text style={styles.statValue}>{cancer.mortality}</Text>
                </View>
              </View>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>Common Symptoms</Text>
              <View style={styles.itemsList}>
                {cancer.symptoms.map((symptom, symptomIndex) => (
                  <View key={symptomIndex} style={styles.listItem}>
                    <View style={styles.listBullet} />
                    <Text style={styles.listText}>{symptom}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>Risk Factors</Text>
              <View style={styles.itemsList}>
                {cancer.riskFactors.map((factor, factorIndex) => (
                  <View key={factorIndex} style={styles.listItem}>
                    <AlertCircle size={12} color="#F97316" />
                    <Text style={styles.listText}>{factor}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.screeningSection}>
              <Text style={styles.screeningTitle}>Recommended Screening</Text>
              <Text style={styles.screeningText}>{cancer.screeningAge}</Text>
            </View>
          </View>
        ))}

        <View style={styles.reminderCard}>
          <Text style={styles.reminderTitle}>Important Reminder</Text>
          <Text style={styles.reminderText}>
            Early detection significantly improves treatment outcomes for most cancer types. 
            Regular screenings and awareness of symptoms are crucial for early intervention. 
            Consult with healthcare professionals about appropriate screening schedules based 
            on your age, family history, and risk factors.
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
  cancerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cancerName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
  statsSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
    marginBottom: 2,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    lineHeight: 18,
  },
  infoSection: {
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  itemsList: {
    marginLeft: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  listBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#14B8A6',
    marginRight: 12,
    marginTop: 8,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginLeft: 8,
  },
  screeningSection: {
    backgroundColor: '#F0F9FF',
    borderRadius: 8,
    padding: 12,
  },
  screeningTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  screeningText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 18,
  },
  reminderCard: {
    backgroundColor: '#F0FDF4',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  reminderText: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
});