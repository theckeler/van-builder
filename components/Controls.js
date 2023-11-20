"use client";

import ControlInputs from "./ControlInputs";
import ControlLabel from "./ControlLabel";

export default function Controls({
  vanBuild,
  checkboxChange,
  radioChange,
  className = "absolute bg-neutral-800 shadow p-2",
  liClassName = "gap-1 items-center group",
  accessories,
  priceFormatter,
}) {
  console.log(vanBuild[vanBuild.currVan]);

  return (
    <>
      <div className={className + " left-4 top-4"}>
        <ul className="grid gap-2">
          {Object.keys(vanBuild.vanView).map(function (objectKey, i) {
            return (
              <li className={liClassName} key={i}>
                <ControlInputs
                  onChange={radioChange}
                  value={objectKey}
                  id={objectKey}
                  type="radio"
                  name="vanView"
                  dataLevel={1}
                  checked={vanBuild.vanView[objectKey].active}
                />
                <ControlLabel htmlFor={objectKey}>{objectKey}</ControlLabel>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={className + " right-4 top-4"}>
        <ul className="grid gap-2">
          {accessories.map(function ({ name, value, id, active }, i) {
            // console.log(accessory);
            return (
              <li className={liClassName} key={i}>
                <ControlInputs
                  value={value}
                  id={id}
                  onChange={(e) => checkboxChange(e)}
                  checked={active}
                />
                <ControlLabel htmlFor={id}>{name}</ControlLabel>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={className + " right-4 bottom-4 text-white"}>
        <ul className="grid gap-2 grid-cols-2 w-full">
          <li className="col-span-full">Total:</li>
          <li>Base:</li>
          <li className="text-left">
            {priceFormatter.format(vanBuild[vanBuild.currVan].price.base)}
          </li>
          <li>Accessories:</li>
          <li className="text-left">
            {priceFormatter.format(
              vanBuild[vanBuild.currVan].price.accessories
            )}
          </li>
          <li>Total:</li>
          <li className="text-left">
            {priceFormatter.format(vanBuild[vanBuild.currVan].price.total)}
          </li>
        </ul>
      </div>
    </>
  );
}
