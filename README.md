# AFC Revenue Performance Dashboard

An interactive CEO dashboard built with Next.js + Tailwind CSS. Upload Excel performance data, generate predictions, and view diagnostic insights with export and filtering tools.

## Features
- Upload Excel (`.xlsx`) files with any name
- Predicts weekly revenue using Lasso regression
- Classifies each week’s performance (Over, Average, Under)
- Identifies and displays:
  - What Went Well
  - What Can Be Improved
  - Aetna and BCBS Analysis
- Visualizations:
  - Revenue over time
  - Frequency of key reasons
- Download CSVs for all data and insights

## Getting Started

```bash
git clone https://github.com/YOUR-ORG/AFC-Revenue-Performance-Analysis.git
cd AFC-Revenue-Performance-Analysis
npm install
npm run dev
```

Upload your `.xlsx` file via the homepage form.

## Deployment
This app is designed for [Vercel](https://vercel.com/):

```bash
vercel --prod
```

## File Structure
```
/components
  SummaryInsights.tsx
  PerformanceLineChart.tsx
  DiagnosticsTable.tsx
  ReasonFrequencyChart.tsx
  RecommendedActions.tsx
/lib
  downloadCSV.ts
/pages
  index.tsx
/public
/styles
```
