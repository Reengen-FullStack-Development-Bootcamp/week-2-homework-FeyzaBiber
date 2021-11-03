<template>
  <validation-observer ref="observer">
    <!-- v-slot="{ invalid }" -->
    <form @submit.prevent="submit">
      <!--NAME-->
      <validation-provider v-slot="{ errors }" name="Name" rules="required">
        <v-text-field
          v-model="name"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>

      <!--SURNAME-->
      <validation-provider v-slot="{ errors }" name="Surname" rules="required">
        <v-text-field
          v-model="surname"
          :error-messages="errors"
          label="Surname"
          required
        ></v-text-field>
      </validation-provider>

      <!--AGE-->
      <validation-provider
        v-slot="{ errors }"
        name="Age"
        :rules="{
          required: true,
          min_value: 6,
        }"
      >
        <v-text-field
          v-model="age"
          :error-messages="errors"
          label="Age"
          required
        ></v-text-field>
      </validation-provider>

      <!--TC-->
      <validation-provider
        v-slot="{ errors }"
        name="TC"
        :rules="{
          required: true,
          digits: 11,
          regex: '^[1-9]{1}[0-9]{9}[02468]{1}$',
        }"
      >
        <v-text-field
          v-model="tc"
          :counter="11"
          :error-messages="errors"
          label="TC"
          required
        ></v-text-field>
      </validation-provider>

      <!--HES-->
      <validation-provider
        v-slot="{ errors }"
        name="HES"
        :rules="{
          required: true,
          
          regex: '^[A-Z0-9]{4}-[A-Z0-9]{4}-[0-9]{2}$',
        }"
      >
        <v-text-field
          v-model="hes"
          :counter="12"
          :error-messages="errors"
          label="HES Code (Please enter as: 1234-5678-90)"
          required
        ></v-text-field>
      </validation-provider>

      <!--PHONE-->
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 10,
          regex: '^(5)\\d{9}$',
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="10"
          :error-messages="errors"
          label="Phone Number (5...)"
          required
        ></v-text-field>
      </validation-provider>

      <!--EMAIL-->
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>

      <!--GENDER-->
      <validation-provider v-slot="{ errors }" name="select" rules="required">
        <v-radio-group
          v-model="gender"
          :error-messages="errors"
          required
          label="Gender"
        >
          <v-radio label="Male" value="M"></v-radio>
          <v-radio label="Female" value="F"></v-radio>
          <v-radio label="Prefer Not Say" value="O"></v-radio>
        </v-radio-group>
      </validation-provider>

      <v-btn @click="clear"> clear </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import {
  required,
  digits,
  email,
  max,
  regex,
  min_value,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

extend("min_value", {
  ...min_value,
  message: "Age must be 6 or older than 6 years old",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    select: null,
    Sitems: ["Male", "Female", "Prefer Not Say"],
    age: "",
    checkbox: null,
    hes: "",
    tc: "",
    gender: "",
    status: "Incomplete",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    watch: {
      "$v.$invalid"() {
        // report changes to parent component, when form $invalid state is false
        if (!this.$v.$invalid) {
          console.log(this.name);
          this.$emit(this.name);
        }
      },
    },
    clear() {
      this.name = "";
      this.surname= "",
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.age = "";
      this.hes = "";
      this.tc = "";
      this.gender = "";
      this.$refs.observer.reset();
    },
  },
};
</script>
<style scoped>
</style>
