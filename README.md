# NEET Rank Predictor

A system to analyze student quiz performance and predict NEET ranks using NestJS.

## Problem Statement
Develop a solution to:
1. Analyze student's quiz performance across topics/difficulty levels
2. Identify weak areas and improvement trends
3. Predict NEET rank based on historical performance
4. (Bonus) Predict admission chances in medical colleges

## Approach

### 1. Data Analysis
- Calculated topic-wise accuracy using historical quiz data
- Tracked performance trends across 5 most recent attempts
- Identified weak areas using accuracy thresholds (<60%)

### 2. Rank Prediction
- Normalized quiz scores to NEET marking scheme (720 scale)
- Created percentile ranking using historical performance data
- Adjusted predictions using difficulty weighting factors

### 3. College Prediction
- Mapped NEET ranks to previous year cutoff data
- Implemented category-wise admission probability
- Considered seat matrix and reservation policies

## Tech Stack
- NestJS (Node.js framework)
- TypeORM (PostgreSQL)
- Swagger (API documentation)
- Class-validator (DTO validation)

## Setup Instructions

### 1. Prerequisites
- Node.js v16+
- PostgreSQL
- npm

### 2. Installation
```bash
git clone https://github.com/yourusername/neet-rank-predictor.git
cd neet-rank-predictor
npm install

Access the swagger endpoint at localhost:3000/api

