import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Utensils, Dumbbell, Brain, Moon, Heart, Droplets } from 'lucide-react-native';

const wellnessTips = [
  {
    icon: Utensils,
    category: 'Nutrition',
    tips: [
      'Eat at least 5 servings of fruits and vegetables daily',
      'Choose whole grains over refined grains',
      'Include omega-3 rich foods like salmon and walnuts',
      'Limit processed and red meat consumption',
      'Stay hydrated with 8-10 glasses of water daily',
    ],
  },
  {
    icon: Dumbbell,
    category: 'Exercise',
    tips: [
      'Aim for 150 minutes of moderate exercise weekly',
      'Include strength training 2-3 times per week',
      'Take regular walks, especially after meals',
      'Try yoga or tai chi for flexibility and stress relief',
      'Use stairs instead of elevators when possible',
    ],
  },
  {
    icon: Brain,
    category: 'Mental Health',
    tips: [
      'Practice meditation for 10-15 minutes daily',
      'Maintain social connections with friends and family',
      'Engage in hobbies and activities you enjoy',
      'Consider counseling if dealing with stress or anxiety',
      'Practice gratitude by writing down 3 things daily',
    ],
  },
  {
    icon: Moon,
    category: 'Sleep',
    tips: [
      'Aim for 7-9 hours of quality sleep nightly',
      'Maintain a consistent sleep schedule',
      'Create a relaxing bedtime routine',
      'Avoid screens 1 hour before bedtime',
      'Keep your bedroom cool, dark, and quiet',
    ],
  },
  {
    icon: Heart,
    category: 'Stress Management',
    tips: [
      'Practice deep breathing exercises',
      'Set realistic goals and expectations',
      'Learn to say no to overwhelming commitments',
      'Spend time in nature regularly',
      'Consider mindfulness-based stress reduction',
    ],
  },
  {
    icon: Droplets,
    category: 'Lifestyle',
    tips: [
      'Avoid tobacco and limit alcohol consumption',
      'Protect your skin from excessive sun exposure',
      'Maintain a healthy weight',
      'Stay up to date with preventive healthcare',
      'Practice good hygiene habits',
    ],
  },
];

export default function WellnessTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wellness Tips</Text>
        <Text style={styles.headerSubtitle}>
          Daily practices for optimal health and cancer prevention
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {wellnessTips.map((section, index) => (
          <View key={index} style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <View style={styles.iconContainer}>
                <section.icon size={24} color="#14B8A6" />
              </View>
              <Text style={styles.sectionTitle}>{section.category}</Text>
            </View>

            <View style={styles.tipsList}>
              {section.tips.map((tip, tipIndex) => (
                <View key={tipIndex} style={styles.tipItem}>
                  <View style={styles.tipBullet} />
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.reminderCard}>
          <Text style={styles.reminderTitle}>Remember</Text>
          <Text style={styles.reminderText}>
            Small, consistent changes in your daily routine can have a significant impact on your 
            overall health and well-being. Start with one or two tips and gradually build healthy habits.
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
  sectionCard: {
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
  sectionHeader: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
  },
  tipsList: {
    marginLeft: 8,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  tipBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#14B8A6',
    marginRight: 12,
    marginTop: 8,
  },
  tipText: {
    flex: 1,
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  reminderCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  reminderText: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
});