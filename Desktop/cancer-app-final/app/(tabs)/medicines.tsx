import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Pill, CircleCheck as CheckCircle, TriangleAlert as AlertTriangle, Info } from 'lucide-react-native';

const medicines = [
  {
    name: 'Chemotherapy',
    category: 'Cytotoxic Therapy',
    uses: ['Various cancer types', 'Primary treatment', 'Adjuvant therapy'],
    benefits: [
      'Kills rapidly dividing cancer cells',
      'Can shrink tumors before surgery',
      'Eliminates microscopic cancer cells',
      'Often curative when combined with other treatments',
    ],
    sideEffects: [
      'Hair loss (temporary)',
      'Nausea and vomiting',
      'Fatigue and weakness',
      'Increased infection risk',
      'Mouth sores',
      'Peripheral neuropathy',
    ],
    management: [
      'Anti-nausea medications available',
      'Regular blood count monitoring',
      'Nutritional support important',
      'Stay hydrated and rest',
    ],
  },
  {
    name: 'Immunotherapy',
    category: 'Immune System Treatment',
    uses: ['Melanoma', 'Lung cancer', 'Kidney cancer', 'Lymphoma'],
    benefits: [
      'Harnesses body\'s immune system',
      'Often less toxic than chemotherapy',
      'Can provide long-lasting responses',
      'May work when other treatments fail',
    ],
    sideEffects: [
      'Immune-related side effects',
      'Fatigue',
      'Skin reactions',
      'Digestive issues',
      'Endocrine dysfunction',
      'Pneumonitis (rare)',
    ],
    management: [
      'Regular monitoring for immune reactions',
      'Steroid treatment for severe side effects',
      'Early intervention crucial',
      'Patient education on symptoms',
    ],
  },
  {
    name: 'Targeted Therapy',
    category: 'Precision Medicine',
    uses: ['Breast cancer (HER2+)', 'Lung cancer (EGFR+)', 'Chronic myeloid leukemia'],
    benefits: [
      'Targets specific cancer mutations',
      'Often oral medications',
      'Generally fewer side effects',
      'Can be highly effective for specific subtypes',
    ],
    sideEffects: [
      'Skin problems (rash, dryness)',
      'Diarrhea',
      'Liver enzyme changes',
      'High blood pressure',
      'Hand-foot syndrome',
      'Fatigue',
    ],
    management: [
      'Regular skin care routine',
      'Monitor liver function',
      'Blood pressure monitoring',
      'Dose adjustments as needed',
    ],
  },
  {
    name: 'Hormone Therapy',
    category: 'Endocrine Treatment',
    uses: ['Breast cancer (hormone-positive)', 'Prostate cancer'],
    benefits: [
      'Blocks hormone-driven cancer growth',
      'Often well-tolerated',
      'Can prevent cancer recurrence',
      'Long-term treatment option',
    ],
    sideEffects: [
      'Menopausal symptoms',
      'Bone density loss',
      'Joint pain and stiffness',
      'Mood changes',
      'Sexual dysfunction',
      'Blood clots (rare)',
    ],
    management: [
      'Bone density monitoring',
      'Calcium and vitamin D supplements',
      'Regular exercise',
      'Symptom management strategies',
    ],
  },
  {
    name: 'Radiation Therapy',
    category: 'Radiation Treatment',
    uses: ['Localized cancers', 'Post-surgical treatment', 'Palliative care'],
    benefits: [
      'Precisely targets cancer cells',
      'Preserves surrounding healthy tissue',
      'Can be curative or palliative',
      'Outpatient treatment',
    ],
    sideEffects: [
      'Skin changes (redness, peeling)',
      'Fatigue',
      'Local pain or discomfort',
      'Hair loss in treated area',
      'Organ-specific effects',
      'Secondary cancer risk (very rare)',
    ],
    management: [
      'Gentle skin care',
      'Adequate rest and nutrition',
      'Follow-up monitoring',
      'Symptom-specific treatments',
    ],
  },
];

export default function MedicinesTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Medicine Information</Text>
        <Text style={styles.headerSubtitle}>
          Understanding cancer treatments, benefits, and side effects
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {medicines.map((medicine, index) => (
          <View key={index} style={styles.medicineCard}>
            <View style={styles.medicineHeader}>
              <View style={styles.medicineIcon}>
                <Pill size={24} color="#14B8A6" />
              </View>
              <View style={styles.medicineBasicInfo}>
                <Text style={styles.medicineName}>{medicine.name}</Text>
                <Text style={styles.medicineCategory}>{medicine.category}</Text>
              </View>
            </View>

            <View style={styles.usesSection}>
              <Text style={styles.sectionTitle}>Primary Uses</Text>
              <View style={styles.usesList}>
                {medicine.uses.map((use, useIndex) => (
                  <View key={useIndex} style={styles.useItem}>
                    <View style={styles.useBullet} />
                    <Text style={styles.useText}>{use}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.benefitsSection}>
              <View style={styles.benefitsHeader}>
                <CheckCircle size={20} color="#10B981" />
                <Text style={styles.benefitsTitle}>Benefits</Text>
              </View>
              <View style={styles.benefitsList}>
                {medicine.benefits.map((benefit, benefitIndex) => (
                  <View key={benefitIndex} style={styles.benefitItem}>
                    <CheckCircle size={16} color="#10B981" />
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.sideEffectsSection}>
              <View style={styles.sideEffectsHeader}>
                <AlertTriangle size={20} color="#F97316" />
                <Text style={styles.sideEffectsTitle}>Potential Side Effects</Text>
              </View>
              <View style={styles.sideEffectsList}>
                {medicine.sideEffects.map((effect, effectIndex) => (
                  <View key={effectIndex} style={styles.sideEffectItem}>
                    <AlertTriangle size={16} color="#F97316" />
                    <Text style={styles.sideEffectText}>{effect}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.managementSection}>
              <View style={styles.managementHeader}>
                <Info size={20} color="#3B82F6" />
                <Text style={styles.managementTitle}>Management Strategies</Text>
              </View>
              <View style={styles.managementList}>
                {medicine.management.map((strategy, strategyIndex) => (
                  <View key={strategyIndex} style={styles.managementItem}>
                    <Info size={16} color="#3B82F6" />
                    <Text style={styles.managementText}>{strategy}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}

        <View style={styles.importantNote}>
          <Text style={styles.noteTitle}>Important Medical Disclaimer</Text>
          <Text style={styles.noteText}>
            This information is for educational purposes only and should not replace professional 
            medical advice. Treatment decisions should always be made in consultation with qualified 
            healthcare professionals who can assess individual circumstances, medical history, and 
            specific cancer characteristics.
          </Text>
          <Text style={styles.noteText}>
            Side effects and benefits can vary significantly between individuals. Your healthcare 
            team will monitor your response to treatment and adjust therapy as needed.
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
  medicineCard: {
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
  medicineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  medicineIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0FDFA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  medicineBasicInfo: {
    flex: 1,
  },
  medicineName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  medicineCategory: {
    fontSize: 14,
    color: '#64748B',
  },
  usesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  usesList: {
    marginLeft: 8,
  },
  useItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  useBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#14B8A6',
    marginRight: 12,
  },
  useText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  benefitsSection: {
    backgroundColor: '#F0FDF4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  benefitsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginLeft: 8,
  },
  benefitsList: {
    marginLeft: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  benefitText: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginLeft: 12,
  },
  sideEffectsSection: {
    backgroundColor: '#FEF7ED',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sideEffectsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sideEffectsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginLeft: 8,
  },
  sideEffectsList: {
    marginLeft: 8,
  },
  sideEffectItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  sideEffectText: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginLeft: 12,
  },
  managementSection: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 16,
  },
  managementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  managementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginLeft: 8,
  },
  managementList: {
    marginLeft: 8,
  },
  managementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  managementText: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginLeft: 12,
  },
  importantNote: {
    backgroundColor: '#FEF2F2',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  noteText: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginBottom: 12,
  },
});