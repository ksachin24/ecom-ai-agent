import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Shield, Stethoscope, UserCheck, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle } from 'lucide-react-native';

const preventionStrategies = [
  {
    icon: Shield,
    title: 'Lifestyle Modifications',
    items: [
      'Maintain a healthy weight through diet and exercise',
      'Avoid tobacco products and limit alcohol consumption',
      'Protect skin from UV radiation with sunscreen and clothing',
      'Eat a balanced diet rich in fruits, vegetables, and whole grains',
      'Stay physically active with regular exercise',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Regular Screenings',
    items: [
      'Mammograms for breast cancer (women 40+)',
      'Colonoscopies for colorectal cancer (50+)',
      'Pap smears for cervical cancer (women 21-65)',
      'Skin examinations for melanoma (annual)',
      'Prostate cancer screening (men 50+)',
    ],
  },
  {
    icon: UserCheck,
    title: 'Vaccinations',
    items: [
      'HPV vaccine to prevent cervical and other cancers',
      'Hepatitis B vaccine to prevent liver cancer',
      'Annual flu vaccination',
      'Stay updated with recommended vaccines',
      'Consult healthcare provider about vaccine schedules',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Risk Factor Awareness',
    items: [
      'Family history of cancer',
      'Exposure to carcinogens in workplace',
      'Chronic infections (HPV, Hepatitis B/C)',
      'Hormonal factors and reproductive history',
      'Age and genetic predisposition',
    ],
  },
];

const earlyWarningSigns = [
  'Unexplained weight loss or gain',
  'Persistent fatigue',
  'Changes in bowel or bladder habits',
  'Unusual bleeding or discharge',
  'Lumps or thickening in breast or other areas',
  'Persistent cough or hoarseness',
  'Changes in skin moles or new growths',
  'Difficulty swallowing',
  'Persistent pain',
];

export default function PreventionTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Prevention Strategies</Text>
        <Text style={styles.headerSubtitle}>
          Evidence-based approaches to reduce cancer risk
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {preventionStrategies.map((strategy, index) => (
          <View key={index} style={styles.strategyCard}>
            <View style={styles.strategyHeader}>
              <View style={styles.iconContainer}>
                <strategy.icon size={24} color="#14B8A6" />
              </View>
              <Text style={styles.strategyTitle}>{strategy.title}</Text>
            </View>

            <View style={styles.itemsList}>
              {strategy.items.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.listItem}>
                  <CheckCircle size={16} color="#10B981" />
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.warningSignsCard}>
          <Text style={styles.warningTitle}>Early Warning Signs</Text>
          <Text style={styles.warningSubtitle}>
            Contact your healthcare provider if you experience any of these symptoms:
          </Text>
          
          <View style={styles.warningList}>
            {earlyWarningSigns.map((sign, index) => (
              <View key={index} style={styles.warningItem}>
                <View style={styles.warningBullet} />
                <Text style={styles.warningText}>{sign}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.actionCard}>
          <Text style={styles.actionTitle}>Take Action Today</Text>
          <Text style={styles.actionText}>
            Prevention is the most effective way to reduce cancer risk. Start with small changes 
            and gradually build healthier habits. Regular check-ups and screenings can catch 
            cancer early when treatment is most effective.
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
  strategyCard: {
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
  strategyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0FDFA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  strategyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
  },
  itemsList: {
    marginLeft: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginLeft: 12,
  },
  warningSignsCard: {
    backgroundColor: '#FEF7ED',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#F97316',
  },
  warningTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  warningSubtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 16,
    lineHeight: 22,
  },
  warningList: {
    marginLeft: 8,
  },
  warningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  warningBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F97316',
    marginRight: 12,
    marginTop: 8,
  },
  warningText: {
    flex: 1,
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  actionCard: {
    backgroundColor: '#F0F9FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
});