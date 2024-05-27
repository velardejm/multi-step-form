export function getTotal(selectedPlan, plansData, addOns, addOnsData, isMonthly) {
    const pricingIndex = isMonthly ? 0 : 1

    let total = 0;

    // console.log(selectedPlan);

    if (plansData !== null && addOnsData !== null) {

        const plan = plansData.filter((i) => i.plan === selectedPlan);

        total += plan.pricing[pricingIndex]

        addOnsData.map((item) => {
            const { addOnKey, pricing } = item;
            if (addOns[addOnKey]) {
                total += pricing[pricingIndex]
            }
        });
    }

    return total;
}