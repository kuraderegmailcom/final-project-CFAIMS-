const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Opportunity = require('./models/Opportunity');

const fixOpportunityTypes = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB\n');

        // Get all opportunities
        const opportunities = await Opportunity.find({});
        console.log(`📊 Found ${opportunities.length} opportunities\n`);

        // Check which ones are missing type or have incorrect type
        const missingType = opportunities.filter(opp => !opp.type);
        const withType = opportunities.filter(opp => opp.type);

        console.log(`✅ Opportunities with type: ${withType.length}`);
        console.log(`❌ Opportunities missing type: ${missingType.length}\n`);

        if (missingType.length > 0) {
            console.log('🔧 Fixing opportunities without type...\n');

            for (const opp of missingType) {
                // Try to guess type based on title or description
                const titleLower = opp.title.toLowerCase();
                const descLower = opp.description.toLowerCase();

                let guessedType = 'internship'; // default

                if (titleLower.includes('freelance') || descLower.includes('freelance') ||
                    titleLower.includes('project') || titleLower.includes('contract')) {
                    guessedType = 'freelance';
                } else if (titleLower.includes('intern') || descLower.includes('intern')) {
                    guessedType = 'internship';
                }

                opp.type = guessedType;
                await opp.save();

                console.log(`  ✓ ${opp.title} → ${guessedType}`);
            }

            console.log(`\n✅ Fixed ${missingType.length} opportunities\n`);
        }

        // Show summary by type
        const internships = await Opportunity.countDocuments({ type: 'internship' });
        const freelance = await Opportunity.countDocuments({ type: 'freelance' });

        console.log('📊 Final Summary:');
        console.log(`   Internships: ${internships}`);
        console.log(`   Freelance: ${freelance}`);
        console.log(`   Total: ${internships + freelance}\n`);

        await mongoose.connection.close();
        console.log('✅ Done!\n');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
};

fixOpportunityTypes();
