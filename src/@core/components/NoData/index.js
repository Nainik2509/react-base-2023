import { Image, Typography } from 'antd'

const NoDataImg = require('@core/assets/illustrations/no-data.jpg')

// No record components
export const customizeRenderEmpty = () => (
  <div className="app-no-data">
    <div className="ant-empty ant-empty-normal">
      <div className="ant-empty-image">
        <Image height={45} width={45} preview={false} src={NoDataImg} />
        <Typography.Text className="no-data-text">
          No Data Found!
        </Typography.Text>
      </div>
    </div>
  </div>
)
