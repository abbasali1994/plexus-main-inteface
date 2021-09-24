import { formatAmount } from "../../../helper/conversions";

const MobileTable = ({
  handleClickAssetMobile,
  selectedLiquidityData,
  currentPosition,
}) => {
  return selectedLiquidityData.map((e, index) => (
    <div
      key={index}
      className="yield-card text-gray-4"
      onClick={() => handleClickAssetMobile(e)}
    >
      <div className="d-flex">
        <img src={e.lpToken1.image} alt="" className="mr-1 asset-icon" />
        <img src={e.lpToken2.image} alt="" className="mr-3 asset-icon" />
        <div className="ml-2">
          <h6 className="mb-0">{e.assets1}</h6>
          {!e.assets2 && <br />}
          <span>{e.assets2}</span>
        </div>
      </div>
      {currentPosition === "all" ? (
        <div className="d-flex justify-content-between mt-4">
          <div>
            <div className="font-weight-bold">
              {e.lpToken1.name}/{e.lpToken2.name}
            </div>
            <div className="font-weight-bold">{e.protocol} LP</div>
          </div>
          <div>
            <div className="yield-card-field mt-1">PROTOCOL</div>
            <div className="font-weight-bold">{e.protocol}</div>
          </div>
          <div>
            <div className="yield-card-field mt-1">YOUR DEPOSITS</div>
            <div className="font-weight-bold">
              {" "}
              ${formatAmount(e.amount * e.price, 2)}
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between mt-4">
          <div>
            <div className="yield-card-field">YOUR DEPOSITS</div>
            <div className="font-weight-bold">
              {" "}
              ${formatAmount(e.amount * e.price, 2)}
            </div>
          </div>
          <div>
            <div className="yield-card-field">ASSET 1</div>
            <div className="font-weight-bold">
              {formatAmount(e.lpToken1.amount, 2)}
            </div>
          </div>
          <div>
            <div className="yield-card-field">ASSET 2</div>
            <div className="font-weight-bold">
              {formatAmount(e.lpToken2.amount, 2)}
            </div>
          </div>
        </div>
      )}
    </div>
  ));
};

export default MobileTable;
