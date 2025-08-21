import React, { useState } from "react";
import { Info } from "lucide-react";
import "./ParamsTable.css";

export interface Param {
  name: string;
  type: string;
  required: boolean;
  description: string;
  detailInfo?: string;
}

interface ParamsTableProps {
  params: Param[];
}

export const ParamsTable: React.FC<ParamsTableProps> = ({ params }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="params-table-container">
      <table className="params-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>类型</th>
            <th>必填</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          {params.map((param, index) => (
            <tr key={index}>
              <td>{param.name}</td>
              <td className="flex items-center gap-1">
                {param.type}
                {param.detailInfo && (
                  <span
                    className="detail-info"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Info className="info-icon" size={12} />
                    {hoveredIndex === index && (
                      <div className="tooltip">{param.detailInfo}</div>
                    )}
                  </span>
                )}
              </td>
              <td>{param.required ? "是" : "否"}</td>
              <td>{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParamsTable;
