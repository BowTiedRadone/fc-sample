import fc from "fast-check";

const numRunsInverseProportion = (numRuns, multiplier) =>
  Math.ceil(multiplier / numRuns);

const main = () => {
  const numRuns = 100;

  const generatorToSample = fc.integer({
    min: 1,
    max: numRunsInverseProportion(numRuns, 10000000),
  });

  const sampleResult = fc.sample(generatorToSample, 10);

  console.log(JSON.stringify(sampleResult, null, 2));
};

main();
