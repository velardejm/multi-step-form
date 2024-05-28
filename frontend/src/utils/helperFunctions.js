export function getTotals(selectedPlan, plansData, addOns, addOnsData, isMonthly) {
    const pricingIndex = isMonthly ? 0 : 1

    let planTotal = 0;
    let addOnsTotal = 0;
    let total = 0

    if (plansData && addOnsData) {
        const plan = plansData.filter((i) => i.plan === selectedPlan);
        planTotal = plan[0].pricing[pricingIndex];
        // console.log(planTotal);

        addOnsData.map((item) => {
            const { addOnKey, pricing } = item;
            if (addOns[addOnKey]) {
                addOnsTotal += pricing[pricingIndex]
            }
            total = planTotal + addOnsTotal
        });
    }

    return [planTotal, addOnsTotal, total];
}
