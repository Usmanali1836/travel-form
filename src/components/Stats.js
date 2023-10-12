export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItem) * 100);
  return (
    <div>
      <footer className="stats">
        <em>
          {numPercentage === 100
            ? `You got everything! Ready to go ✈`
            : ` 💼 You have ${numItem} items on your list , and you already packed ${numPacked} (${numPercentage}%)`}
        </em>
      </footer>
    </div>
  );
}
