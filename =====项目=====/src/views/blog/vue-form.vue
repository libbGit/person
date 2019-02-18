<template>
    <div>
        <h4>vue表单实例</h4>
        <article class="markdown-body">
            <ul data-source-line="2">
                <li>使用model绑定数据。</li>
                <li>rules绑定规则，</li>
                <li>el-form-item的prop定义具体规则。[对应的是model.prop的值]</li>
                <li>ref获取form节点用来校验</li>
            </ul>
            <pre data-source-line="7"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-form</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">"ruleForm"</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">"rules"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"ruleForm"</span> <span class="hljs-attr">label-width</span>=<span class="hljs-string">"100px"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-ruleForm"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">年龄</span>"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"age"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.age"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">活动名称</span>"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.name"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">活动区域</span>"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"region"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.region"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"<span class="zh-hans">请选择活动区域</span>"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">区域一</span>"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">区域二</span>"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"beijing"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">活动时间</span>"</span> <span class="hljs-attr">required</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"11"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"date1"</span>&gt;</span>
                      <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"<span class="zh-hans">选择日期</span>"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.date1"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"line"</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"2"</span>&gt;</span>-<span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"11"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"date2"</span>&gt;</span>
                      <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"fixed-time"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"<span class="zh-hans">选择时间</span>"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.date2"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-time-picker</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">即时配送</span>"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"delivery"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.delivery"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">活动性质</span>"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"type"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.type"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">美食</span>/<span class="zh-hans">餐厅线上活动</span>"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">地推活动</span>"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">线下主题活动</span>"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">单纯品牌曝光</span>"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">特殊资源</span>"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"resource"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.resource"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">线上品牌商赞助</span>"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">线下场地免费</span>"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"<span class="zh-hans">活动形式</span>"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"desc"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.desc"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"submitForm()"</span>&gt;</span><span class="zh-hans">立即创建</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"resetForm()"</span>&gt;</span><span class="zh-hans">重置</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
  
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">let</span> checkAge = <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (!value) {
          <span class="hljs-keyword">return</span> callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">"<span class="zh-hans">年龄不能为空</span>"</span>));
        }
        <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">Number</span>.isInteger(value)) {
          callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">"<span class="zh-hans">请输入数字值</span>"</span>));
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">if</span> (value &lt; <span class="hljs-number">18</span>) {
            callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">"<span class="zh-hans">必须年满</span>18<span class="zh-hans">岁</span>"</span>));
          } <span class="hljs-keyword">else</span> {
            callback();
          }
        }
      };
  
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">ruleForm</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">""</span>,
          <span class="hljs-attr">region</span>: <span class="hljs-string">""</span>,
          <span class="hljs-attr">date1</span>: <span class="hljs-string">""</span>,
          <span class="hljs-attr">date2</span>: <span class="hljs-string">""</span>,
          <span class="hljs-attr">delivery</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">type</span>: [],
          <span class="hljs-attr">resource</span>: <span class="hljs-string">""</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">""</span>
        },
        <span class="hljs-attr">rules</span>: {
          <span class="hljs-attr">age</span>: [{ <span class="hljs-attr">validator</span>: checkAge, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"blur"</span> }],
          <span class="hljs-attr">name</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">请输入活动名称</span>"</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"blur"</span> },
            { <span class="hljs-attr">min</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">max</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">长度在</span> 3 <span class="zh-hans">到</span> 5 <span class="zh-hans">个字符</span>"</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"blur"</span> }
          ],
          <span class="hljs-attr">region</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">请选择活动区域</span>"</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"change"</span> }
          ],
          <span class="hljs-attr">date1</span>: [
            { <span class="hljs-attr">type</span>: <span class="hljs-string">"date"</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">请选择日期</span>"</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"change"</span> }
          ],
          <span class="hljs-attr">date2</span>: [
            { <span class="hljs-attr">type</span>: <span class="hljs-string">"date"</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">请选择时间</span>"</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"change"</span> }
          ],
          <span class="hljs-attr">type</span>: [
            { <span class="hljs-attr">type</span>: <span class="hljs-string">"array"</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">请至少选择一个活动性质</span>"</span>,<span class="hljs-attr">trigger</span>: <span class="hljs-string">"change"</span><span class="zh-hans">　</span>}
          ],
          <span class="hljs-attr">resource</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">请选择活动资源</span>"</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"change"</span> }
          ],
          <span class="hljs-attr">desc</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">"<span class="zh-hans">请填写活动形式</span>"</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">"blur"</span> }]
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      submitForm() {
        <span class="hljs-keyword">this</span>.$refs[<span class="hljs-string">'ruleForm'</span>].validate(<span class="hljs-function"><span class="hljs-params">valid</span> =&gt;</span> {
          <span class="hljs-keyword">if</span> (valid) {
            alert(<span class="hljs-string">"submit!"</span>);
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"error submit!!"</span>);
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
          }
        });
  
        <span class="hljs-keyword">this</span>.$refs[<span class="hljs-string">'ruleForm'</span>].validateField();  <span class="hljs-comment">//<span class="zh-hans">验证单个表单域</span></span>
      },
      resetForm() {
        <span class="hljs-keyword">this</span>.$refs[<span class="hljs-string">'ruleForm'</span>].resetFields();
      }
    }
  };
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  </code></pre>
        </article>

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "vue-form",
    data() {
        return {
            message: ""
        };
    },

    computed: {
        /*...mapState({
           本地state名字: state => state.模块名称.state名称
        })*/
        /* ...mapGetters('模块名称', ['getter名称']),*/
    },
    watch: {
        /*data或computed变量: {
          handler: function(val) {
            
          },
          deep: true
        }*/
    },

    methods: {
        /*...mapMutations('模块名称', [
          'mutation名称'
        ]),
        
        ...mapActions('模块名称', [
          'action名称'
        ]),*/
    },

    created() {
        //初始化,无法操作dom
    },

    mounted() {
        //初始化，可以操作dom
        //this.refs
    },

    components: {
        //子组件
    }
};
</script>
<style lang="scss" scoped>
/*本地部分*/
@import "mark-down.scss";
</style>
<style>
/*全局部分*/
</style>