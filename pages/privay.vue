<template>
  <div id="pivacy">
    <Title title="Privacy Policy" />
    <section class="section container">
      <p>
        Jens Krumsieck
        <br />Celler Str. 108
        <br />38114 Braunschweig
      </p>
      <h4 class="title is-4 m-t-25">Contact Information</h4>
      <p>
        Telephone: 017630629281
        <br />E-Mail: j.krumsieck@tu-bs.de
        <br />Internet address:
        <a href="https://jenskrumsieck.github.io" rel="noreferrer">https://jenskrumsieck.github.io</a>
      </p>
      <h4 class="title is-5 m-t-25">Disclaimer</h4>

      <h5 class="title is-6">Accountability for content</h5>
      <p>
        The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy,
        completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages.
        In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate
        circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain
        unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
      </p>

      <h5 class="title is-6 m-t-25">Accountability for links</h5>
      <p>
        Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages.
        No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective
        link immediately.
      </p>

      <h4 class="title is-5 m-t-25">Copyright</h4>
      <p>
        Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing,
        reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner
        of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted
        and any unauthorized use may violate copyright laws.
        <br />
        <small>
          Source:
          <a
            href="https://www.translate-24h.de"
            rel="noreferrer"
            target="_blank"
          >Übersetzungsbüro translate-24h.de</a>
        </small>
      </p>
    </section>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
  name: "legal",
  components: {
    Title
  }
};
</script>