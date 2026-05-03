# Data Model Draft

## StudentProfile

- id
- firstName
- gradeLevel
- interests
- selectedEnrichmentTracks
- faithSetting
- activityPreferences
- rewardPreferences

## FamilyAccount

- id
- parent
- parent.name
- parent.email
- children
- children.id
- children.firstName
- credentials.version
- credentials.parentSalt
- credentials.childSalt
- credentials.parentPasscodeHash
- credentials.childPasscodeHash

## ParentPolicy

- allowedRewards
- friendInvitesEnabled
- progressSharingEnabled
- externalMessagingEnabled
- liveSessionsEnabled
- teacherSharingEnabled
- faithContentLevel
- physicalActivityRestrictions

## ProgramPlan

- studentId
- gradeLevel
- weeks
- enrichmentTracks
- rewardPlan
- parentApprovalsNeeded

## WeeklyPlan

- weekNumber
- theme
- goals
- subjects
- project
- parentSummary

## DailyMission

- dateLabel
- warmup
- lessons
- creativeChallenge
- reflectionPrompt
- bodyCheck
- rewardOpportunity

## ProgressSnapshot

- completedMissions
- xp
- masteryStars
- campCoins
- subjectMastery
- streaks
- socialProjects

## SharePackage

- recipientType
- approvedByParent
- includedSubjects
- includedProjects
- transcriptSummary
- certificateLinks
