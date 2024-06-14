interface ITable {
  headers: string[]
  lines: React.ReactNode[][]
}

export const Table = ({ headers, lines }: ITable) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th className="p-2 border-b-2 border-light-background-tertiary text-left font-light text-gray-400 dark:border-dark-background-tertiary" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lines.map((line, index) => (
          <tr className="rounded-full cursor-pointer hover:bg-gray-100" key={index}>
            {line.map((column, index) => (
              <td className="p-2 border-b border-border-light-background-tertiary dark:border-dark-background-tertiary" key={index}>
                {column}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}