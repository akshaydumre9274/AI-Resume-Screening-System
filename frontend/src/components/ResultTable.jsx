function ResultTable({ results }) {

  if (!results || results.length === 0) {
    return (
      <div className="table-card">
        <h3>No Results Yet</h3>
      </div>
    );
  }

  return (
    <div className="table-card">

      <h2>Ranking Result</h2>

      <table>

        <thead>
          <tr>
            <th>Rank</th>
            <th>Resume</th>
            <th>Match Score</th>
          </tr>
        </thead>

        <tbody>

          {results.map((item) => (
            <tr key={item.rank}>
              <td>{item.rank}</td>
              <td>{item.resume}</td>
              <td>{item.score}%</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ResultTable;