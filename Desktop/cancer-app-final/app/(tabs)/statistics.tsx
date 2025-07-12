import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TrendingUp, Globe, Users, Activity, TriangleAlert as AlertTriangle, Target } from 'lucide-react-native';

const globalStats = {
  totalCases: '20 million',
  annualDeaths: '10 million',
  survivorsWorldwide: '50 million',
  newCasesDaily: '54,000',
  economicBurden: '$1.16 trillion',
  survivorshipRate: '67%',
};

const regionalData = [
  { region: 'Asia', cases: '9.5 million', percentage: '47.5%' },
  { region: 'Europe', cases: '4.4 million', percentage: '22%' },
  { region: 'North America', cases: '2.4 million', percentage: '12%' },
  { region: 'Latin America', cases: '1.4 million', percentage: '7%' },
  { region: 'Africa', cases: '1.1 million', percentage: '5.5%' },
  { region: 'Oceania', cases: '0.2 million', percentage: '1%' },
];

const commonCancers = [
  { type: 'Breast', cases: '2.3M', deaths: '685K', survivability: '90%' },
  { type: 'Lung', cases: '2.2M', deaths: '1.8M', survivability: '22%' },
  { type: 'Colorectal', cases: '1.9M', deaths: '935K', survivability: '65%' },
  { type: 'Prostate', cases: '1.4M', deaths: '375K', survivability: '98%' },
  { type: 'Stomach', cases: '1.1M', deaths: '769K', survivability: '32%' },
  { type: 'Liver', cases: '906K', deaths: '830K', survivability: '20%' },
];

const trends = [
  {
    title: 'Increasing Incidence',
    description: 'Cancer cases are expected to rise by 47% by 2040',
    icon: TrendingUp,
    color: '#EF4444',
  },
  {
    title: 'Improving Survival',
    description: '5-year survival rates have improved significantly over the past decade',
    icon: Activity,
    color: '#10B981',
  },
  {
    title: 'Prevention Impact',
    description: '40% of cancers could be prevented through lifestyle changes',
    icon: Target,
    color: '#3B82F6',
  },
  {
    title: 'Early Detection',
    description: 'Early-stage cancers have 90%+ survival rates in many types',
    icon: AlertTriangle,
    color: '#F97316',
  },
];

export default function StatisticsTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Global Statistics</Text>
        <Text style={styles.headerSubtitle}>
          Worldwide cancer data and trends (2024)
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>Global Overview</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Globe size={24} color="#3B82F6" />
              <Text style={styles.statNumber}>{globalStats.totalCases}</Text>
              <Text style={styles.statLabel}>New Cases Annually</Text>
            </View>
            <View style={styles.statCard}>
              <Activity size={24} color="#EF4444" />
              <Text style={styles.statNumber}>{globalStats.annualDeaths}</Text>
              <Text style={styles.statLabel}>Deaths Annually</Text>
            </View>
            <View style={styles.statCard}>
              <Users size={24} color="#10B981" />
              <Text style={styles.statNumber}>{globalStats.survivorsWorldwide}</Text>
              <Text style={styles.statLabel}>Cancer Survivors</Text>
            </View>
            <View style={styles.statCard}>
              <TrendingUp size={24} color="#14B8A6" />
              <Text style={styles.statNumber}>{globalStats.survivorshipRate}</Text>
              <Text style={styles.statLabel}>5-Year Survival Rate</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Regional Distribution</Text>
          <View style={styles.regionalCard}>
            {regionalData.map((region, index) => (
              <View key={index} style={styles.regionItem}>
                <View style={styles.regionInfo}>
                  <Text style={styles.regionName}>{region.region}</Text>
                  <Text style={styles.regionCases}>{region.cases} cases</Text>
                </View>
                <View style={styles.regionPercentage}>
                  <Text style={styles.percentageText}>{region.percentage}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Common Cancer Types</Text>
          <View style={styles.cancerTypesCard}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Cancer Type</Text>
              <Text style={styles.headerCell}>New Cases</Text>
              <Text style={styles.headerCell}>Deaths</Text>
              <Text style={styles.headerCell}>5-Year Survival</Text>
            </View>
            {commonCancers.map((cancer, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.cellType}>{cancer.type}</Text>
                <Text style={styles.cellData}>{cancer.cases}</Text>
                <Text style={styles.cellData}>{cancer.deaths}</Text>
                <Text style={[styles.cellData, { color: '#10B981', fontWeight: '600' }]}>
                  {cancer.survivability}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Trends & Insights</Text>
          {trends.map((trend, index) => (
            <View key={index} style={styles.trendCard}>
              <View style={[styles.trendIcon, { backgroundColor: `${trend.color}15` }]}>
                <trend.icon size={24} color={trend.color} />
              </View>
              <View style={styles.trendContent}>
                <Text style={styles.trendTitle}>{trend.title}</Text>
                <Text style={styles.trendDescription}>{trend.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.additionalStats}>
          <Text style={styles.sectionTitle}>Additional Statistics</Text>
          <View style={styles.additionalCard}>
            <View style={styles.additionalItem}>
              <Text style={styles.additionalLabel}>Economic Burden</Text>
              <Text style={styles.additionalValue}>{globalStats.economicBurden} USD annually</Text>
            </View>
            <View style={styles.additionalItem}>
              <Text style={styles.additionalLabel}>New Cases Daily</Text>
              <Text style={styles.additionalValue}>{globalStats.newCasesDaily} cases worldwide</Text>
            </View>
            <View style={styles.additionalItem}>
              <Text style={styles.additionalLabel}>Preventable Cases</Text>
              <Text style={styles.additionalValue}>40% through lifestyle changes</Text>
            </View>
          </View>
        </View>

        <View style={styles.sourceCard}>
          <Text style={styles.sourceTitle}>Data Sources</Text>
          <Text style={styles.sourceText}>
            Statistics compiled from World Health Organization (WHO), International Agency for 
            Research on Cancer (IARC), and national cancer registries. Data reflects 2024 estimates 
            and may vary by region and reporting methodology.
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
  overviewSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  regionalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  regionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  regionInfo: {
    flex: 1,
  },
  regionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 2,
  },
  regionCases: {
    fontSize: 14,
    color: '#64748B',
  },
  regionPercentage: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },
  cancerTypesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerCell: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  cellType: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
  },
  cellData: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },
  trendCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  trendIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  trendContent: {
    flex: 1,
  },
  trendTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  trendDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  additionalStats: {
    marginBottom: 30,
  },
  additionalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  additionalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  additionalLabel: {
    fontSize: 16,
    color: '#64748B',
  },
  additionalValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  sourceCard: {
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  sourceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  sourceText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
});