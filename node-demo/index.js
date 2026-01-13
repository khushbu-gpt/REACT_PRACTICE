try {
  JSON.parse("{name: 'JS'}");
} catch (e) {
  console.log("Error caught");
} finally {
  console.log("Done");
}
