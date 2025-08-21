import type { ReactNode } from "react";

interface IBlurryBackgroundProps {
  children?: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function Background({
  children,
  primaryColor = "bg-primary-500",
  secondaryColor = "bg-primary-400",
}: IBlurryBackgroundProps) {
  return (
    <div className="relative w-full">
      {/* 模糊背景部分 */}
      <div className="bg-base-100 fixed z-[-10] flex h-full w-full">
        <div className="bg-base-100 flex h-full w-full">
          {/* 左侧大型模糊形状 */}
          <div className="h-3/6 w-2/5 translate-y-1/2 opacity-40">
            <div className="h-full w-full opacity-70 blur-2xl">
              <div className="h-full w-full blur-2xl">
                <div
                  className={`h-full w-full ${primaryColor} blur-2xl`}
                  style={{
                    transform: "rotate(30deg)",
                    clipPath:
                      "polygon(40% 0%, 100% 30%, 80% 100%, 20% 100%, 0% 30%)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* 中间小型模糊形状 */}
          <div className="h-2/6 w-1/6 translate-x-3/4 -translate-y-40 opacity-40">
            <div className="h-full w-full opacity-80 blur-2xl">
              <div className="h-full w-full blur-2xl">
                <div
                  className={`h-full w-full rotate-45 ${secondaryColor}`}
                  style={{
                    clipPath:
                      "polygon(60% 0%, 100% 40%, 70% 100%, 30% 100%, 0% 40%)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* 右侧模糊形状 */}
          <div
            className="absolute top-96 -right-40 h-2/6 w-1/5 opacity-40"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="h-full w-full opacity-60 blur-2xl">
              <div className="h-full w-full blur-2xl">
                <div
                  className={`h-full w-full ${secondaryColor} blur-2xl`}
                  style={{
                    transform: "rotate(12deg)",
                    clipPath:
                      "polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 子组件容器 */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
