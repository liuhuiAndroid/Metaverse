<template>
  <view class="container" :style="{
    background: `url(${imageURL}) center no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 0'
  }">
    <view class="form-area">
      <view class="form-item flex-center">
        <input placeholder="请输入您的姓名" v-model="formData.name" />
      </view>
      <view class="form-item flex-center">
        <input placeholder="请输入手机号" v-model="formData.phoneNumber" />
      </view>
      <view class="form-item flex-center">
        <view class="form-item-flex flex-between">
          <input placeholder="请输入验证码" v-model="formData.validateCode" />
          <button @click="">获取验证码</button>
        </view>
      </view>
      <view class="tips flex-center">
        <text>
          活动日期
        </text>
      </view>
      <view class="form-item flex-center">
        <view class="form-list flex-between">
          <view class="form-list-cell-left">
            当前选择
          </view>
          <view class="form-list-cell-db">
            <picker class="flex" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
              <view class="uni-input">{{ date }}</view>
            </picker>
          </view>
        </view>
      </view>
      <view class="form-item flex-center">
        <button class="form-submit" @click="submitForm">立即预约</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    const currentDate = this.getDate({
      format: true
    })
    return {
      formData: {
        name: '',
        phoneNumber: '',
        month: 0,
      },
      date: currentDate,
      selfAdaptionPaddingTom: 0,
      matches: false,
      imageURL: 'https://live.maigel.com/img_new/yuyue.jpg',
    }
  },
  computed: {
    startDate() {
      return this.getDate('start');
    },
    endDate() {
      return this.getDate('end');
    }
  },
  mounted() {
    const [month, day] = this.getSingelDate(this.date)
    this.formData.month = month
    this.formData.day = day
  },
  methods: {
    getSingelDate(date) {
      const dateArr = date.split('-')
      const month = +dateArr[1]
      const day = +dateArr[2]
      console.log(month, day)
      return [month, day]
    },
    bindDateChange(e) {
      this.date = e.detail.value
      const [month, day] = this.getSingelDate(this.date)
    },
    submitForm() {
      this.formData.phoneNumber = +this.formData.phoneNumber
      console.log(this.formData)
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === 'start') {
        year = year - 60;
      } else if (type === 'end') {
        year = year + 2;
      }
      month = month > 9 ? month : '0' + month;
      day = day > 9 ? day : '0' + day;
      return `${year}-${month}-${day}`;
    }
  },
}
</script>
<style lang="scss">
Page {
  height: 100vh;
}
</style>
<style lang="scss">
.container {
  height: 100%;
  padding-top: 400rpx;

  >.form-area {

    >.form-item {
      margin-bottom: 20px;

      input {
        height: 36px;
        border: 1px solid #767676;
        padding-left: 10px;
        border-radius: 8px;
      }

      >input {
        width: 236px;
      }

      >.form-item-flex {
        width: 236px;
        align-items: center;

        >input {
          flex: 1;
          padding-left: 10px;
          margin-right: 10px;
          height: 36px;
          border: 1px solid #767676;
        }

        button {
          width: 80px;
          text-decoration: none;
          height: 33px;
          background-color: #42d1ed;
          border: 1px solid #42d1ed;
          font-size: 12px;
          text-align: center;
          color: #ffffff;
          ;
        }
      }

      >.form-list {
        align-items: center;
        width: 236px;

        >.form-list-cell-left {
          font-size: 14px;
        }

        >.form-list-cell-db {
          margin-left: 10px;
          height: 36px;
          flex-grow: 1;
          border: 1px solid #767676;
          border-radius: 8px;

          picker {
            padding-left: 10px;
            align-items: center;
            width: 100%;
            height: 100%;
          }
        }
      }

      >.form-submit {
        width: 130px;
        text-decoration: none;
        height: 40px;
        background-color: #42aaeb;
        border: 1px solid #42d1ed;
        font-size: 16px;
        float: left;
        line-height: 40px;
        border-radius: 5px;
        color: #ffffff;
        text-align: center;
      }
    }

    >.tips {
      margin-bottom: 10px;
      font-weight: bold;
      color: #ff6f15;

      >text {
        width: 236px;
      }
    }
  }
}
</style>
