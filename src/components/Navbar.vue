<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent" role="navigation">
    <div class="container no-override">
      <a class="navbar-brand" href="/">
          <img src="../assets/images/helios.png" style="width: 25%;" class="d-none d-lg-inline mr-2"/>
          {{ $t("title") }}
        </a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbar-collapse" style="padding-top: 30px">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(value, key) in $i18n.messages[$i18n.locale].navbar">
            <a class="nav-link" :href="'#/'+ key">{{ value }}</a>
          </li>
          <li class="nav-item">
            <select class="nav-link" v-model="$i18n.locale" style="background: transparent; border: none; outline: none;">
              <option style="background: transparent; color: black;">en</option>
              <option style="background: transparent; color: black;">ua</option>
              <option style="background: transparent; color: black">ru</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
