function calculateMinCost() {
  const input = document.getElementById("rope-lengths").value;
  const ropes = input.split(",").map(num => parseInt(num.trim(), 10));

  if (ropes.some(isNaN) || ropes.length === 0) {
    document.getElementById("result").textContent = "Please enter valid numbers.";
    return;
  }

  let cost = 0;
  let ropeArray = [...ropes];
  while (ropeArray.length > 1) {
    ropeArray.sort((a, b) => a - b);
    const first = ropeArray.shift();
    const second = ropeArray.shift();
    const sum = first + second;
    cost += sum;
    ropeArray.push(sum);
  }
	document.getElementById("result").textContent = cost;
}
