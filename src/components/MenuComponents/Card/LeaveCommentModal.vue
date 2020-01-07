<template>
  <div class='leave-comment-modal' @click="openLeaveCommentModal">
    <div class='leave-comment-wrapper'>
      <img
        class='cross-icon'
        :src="closeDown"
      />
      <p>Vill du lämna en kommentar till köket?</p>
      <textarea name="" id="" cols="15" rows="5"></textarea>
      <span>Vänligen var sparsam med ord</span>
    </div>
  </div>
</template>

<script>
import CloseDown from '@/assets/icons/WhiteCross.svg';

export default {
  name: 'leave-comment-modal',
  data: () => ({
    closeDown: CloseDown,
  }),
  computed: {
    leaveComment() {
      return this.$store.state.leaveComment;
    },
  },
  methods: {
    openLeaveCommentModal() {
      this.$store.commit('setLeaveCommentModal', false);
    },
  },
};
</script>
<style lang="scss">
.leave-comment-modal {
  background: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 999;
  height: 100%;
  width: 100%;

  .leave-comment-wrapper {
    background: white;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 40px 20px;
    border-radius: 5px;

    .cross-icon {
      position: absolute;
      top: -50px;
      left: -10px;
    }

    > textarea {
      max-width: 240px;
      max-height: 166px;
      min-width: 240px;
      min-height: 166px;
      border: 1px solid #aa0909;
    }

    > span {
      font-size: 12px;
    }
  }
}
</style>
