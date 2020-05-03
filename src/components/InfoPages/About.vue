<template>
  <div class="about">
    <section class="about-img-wrapper">
      <img :src="imgUrl" alt="restaurangpersonal" />
    </section>
    <section class="about-text-wrapper">
      <h3>Genuina smaker från Thailand</h3>
      <hr />
      <p>
        Den thailändska maten erbjuder en explosion för smaklökarna. Kyckling, biff och fläskkött serveras ofta i små färdigskurna
        bitar och kombineras med grönsaker, ris och nudlar. Den berömda fisksåsen ger sälta och smakdjup, och chilin sätter hettan.
      </p>
      <br />
      <p>
        Vi har lagat mat till hungriga halländare och turister i 10 år. Är ni sugna på Laholms kanske bästa thaimat,
        hör gärna av er till oss på
        <a
          class="phone-number"
          href="tel:+46 430 28300"
        >+46 430 28300</a>
      </p>
      <br />
      <p>Välkommen till oss!</p>
    </section>
  </div>
</template>

<script>
import AboutPic from "@/assets/images/aboutpic.jpg";

export default {
  data: () => ({
    imgUrl: AboutPic
  })
};
</script>
<style lang="scss">
.phone-number {
  color: #aa0909;
  font-size: 14px;
  line-height: 20px;
}
</style>