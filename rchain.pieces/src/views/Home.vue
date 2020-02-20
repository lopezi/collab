<template>
    <div>
        <mu-container>
            <mu-row gutter style="margin-top:20px;">
                <mu-col span="12" sm="12" md="12">
                    <mu-paper style="width: 100%; padding:5px 5px 5px 25px;" class="demo-paper" :z-depth="3">
                        <p>
                            <span style="font-size:10px">February 19, 2020</span> steverosstalbot.<br>
                            I would like to do a live test on mainnet (...) to take 100 REV, divide into as small as possible pieces and then transfer piece by piece to another wallet.
                        </p>
                    </mu-paper>
                </mu-col>
            </mu-row>

            <mu-row gutter style="margin-top:20px;">
                <mu-col span="12" sm="12" md="6">
                    <div class="grid-cell">
                        <mu-flex class="flex-wrapper" align-items="center">
                            <mu-paper style="width: 100%; padding:44px;" class="demo-paper" :z-depth="3">
                                <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                                    <mu-flex align-items="center; width:100%;" style="padding-bottom: 8px;">
                                        <mu-form-item label="Amount" help-text="Amount to transfer" prop="username" :rules="usernameRules">
                                            <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                                        </mu-form-item>
                                        <mu-form-item style="margin-left:20px;" label="Division" help-text="Amount divided by" prop="division" :rules="divisionRules">
                                            <mu-text-field type="number" v-model="validateForm.division" prop="division"></mu-text-field>
                                        </mu-form-item>
                                    </mu-flex>
                                    <mu-form-item label="Recipient" help-text="Recipient's address" prop="password" :rules="passwordRules">
                                        <mu-text-field type="text" v-model="validateForm.password" prop="password"></mu-text-field>
                                    </mu-form-item>

                                    <mu-form-item style="margin-top: 40px;">
                                        <mu-button style="margin-left: 0;" @click="clear">reset</mu-button>
                                        <mu-button color="primary" @click="submit">Transfer</mu-button>
                                    </mu-form-item>
                                </mu-form>
                            </mu-paper>
                        </mu-flex>
                    </div>
                </mu-col>
                <mu-col span="12" sm="12" md="6">
                    <div class="grid-cell">
                        <mu-flex class="flex-wrapper" align-items="center">
                            <mu-paper style="width: 100%; padding:44px;" class="demo-paper" :z-depth="3">
                                Total transactions: 0<br>
                                Number of finished transactions:
                            </mu-paper>
                        </mu-flex>
                    </div>
                </mu-col>
            </mu-row>
        </mu-container>
    </div>
</template>

<script>
    //import navigation   from '../components/Navigation';
    //import Footer       from '../components/Footer';
    export default {
        name: 'home',
        metaInfo: {
            title: 'Home',
        },
        data () {
            return {
                usernameRules: [
                    { validate: (val) => !!val, message: 'Amount must be filled in'},
                    { validate: (val) => val.length >= 3, message: 'Username length greater than 3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: 'Recipient must be filled in'},
                    { validate: (val) => val.length >= 3 && val.length <= 100, message: 'Password length must be greater than 3 and less than 100'}
                ],
                divisionRules: [
                    { validate: (val) => !!val, message: 'Division number be filled in'},
                    { validate: (val) => val.length >= 3 && val.length <= 1000000, message: 'Divide by more than 3 and less 1 million'}
                ],
                validateForm: {
                    username: '',
                    password: '',
                    division: '',
                }
            }
        },
        methods: {
            submit () {
                /*this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result)
                });
                 */
            },
            clear () {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            }
        }
    };
</script>

<style lang="scss">
    .mu-form-item-label {
        font-weight: bold;
    }
</style>
